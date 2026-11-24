#!/usr/bin/env python3
"""VDOT and approximate training paces from a race result (Daniels & Gilbert equations, 1979).

Usage:
    python3 vdot.py 10000 48:30          # distance in metres, time mm:ss or h:mm:ss
    python3 vdot.py 21097.5 1:45:00

The result is an approximation. The tables in Daniels' book and the official VDOT O2
calculator may differ by a few seconds per km — if they disagree, record the official
calculator values and the method in _facts.md.
"""
import math
import sys

RACES = [("5K", 5000.0), ("10K", 10000.0), ("half", 21097.5), ("marathon", 42195.0)]


def vo2_at_speed(v_m_min: float) -> float:
    """Oxygen cost of running (ml/kg/min) at speed v (m/min)."""
    return -4.60 + 0.182258 * v_m_min + 0.000104 * v_m_min ** 2


def fraction_sustainable(t_min: float) -> float:
    """Fraction of VO2max sustainable for t minutes."""
    return 0.8 + 0.1894393 * math.exp(-0.012778 * t_min) + 0.2989558 * math.exp(-0.1932605 * t_min)


def vdot(distance_m: float, t_min: float) -> float:
    return vo2_at_speed(distance_m / t_min) / fraction_sustainable(t_min)


def speed_for_vo2(vo2: float) -> float:
    """Inverse of vo2_at_speed: speed (m/min) for a given VO2."""
    a, b, c = 0.000104, 0.182258, -4.60 - vo2
    return (-b + math.sqrt(b * b - 4 * a * c)) / (2 * a)


def predict_time(v_dot: float, distance_m: float) -> float:
    """Time (min) over a distance at a given VDOT — bisection."""
    lo, hi = 1.0, 600.0
    for _ in range(100):
        mid = (lo + hi) / 2
        if vdot(distance_m, mid) > v_dot:
            lo = mid  # too fast, lengthen the time
        else:
            hi = mid
    return (lo + hi) / 2


def parse_time(s: str) -> float:
    parts = [float(p) for p in s.split(":")]
    if len(parts) == 2:
        return parts[0] + parts[1] / 60
    if len(parts) == 3:
        return parts[0] * 60 + parts[1] + parts[2] / 60
    raise ValueError("Give the time as mm:ss or h:mm:ss")


def fmt_min(t_min: float) -> str:
    total = round(t_min * 60)
    h, rem = divmod(total, 3600)
    m, s = divmod(rem, 60)
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m}:{s:02d}"


def pace_per_km(v_m_min: float) -> str:
    return fmt_min(1000.0 / v_m_min)


def main() -> None:
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    distance = float(sys.argv[1])
    t = parse_time(sys.argv[2])
    v = vdot(distance, t)
    print(f"VDOT ≈ {v:.1f}  (result: {distance:g} m in {fmt_min(t)})\n")

    print("Predicted results (same VDOT):")
    for name, d in RACES:
        print(f"  {name:<9} {fmt_min(predict_time(v, d))}")

    def pace_at(frac: float) -> float:
        return speed_for_vo2(v * frac)

    m_speed = 42195.0 / predict_time(v, 42195.0)
    i_speed = pace_at(0.975)
    r_400_s = 400.0 / i_speed * 60 - 6  # R ≈ about 6 s per 400 m faster than I
    print("\nApproximate paces (min/km):")
    print(f"  E (easy)         {pace_per_km(pace_at(0.74))} – {pace_per_km(pace_at(0.59))}")
    print(f"  M (marathon)     {pace_per_km(m_speed)}")
    print(f"  T (threshold)    {pace_per_km(pace_at(0.88))} – {pace_per_km(pace_at(0.83))}")
    print(f"  I (intervals)    {pace_per_km(pace_at(1.00))} – {pace_per_km(pace_at(0.95))}")
    print(f"  R (repetitions)  about {r_400_s:.0f} s / 400 m")
    print("\nApproximation from the Daniels–Gilbert equations; compare with the official VDOT calculator.")


if __name__ == "__main__":
    main()
