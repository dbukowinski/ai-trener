#!/usr/bin/env bash
# Buduje paczki dystrybucyjne skilla ai-trener:
#   dist/ai-trener-skill.zip  — do wgrania jako skill w Claude (folder ai-trener w korzeniu ZIP)
#   dist/ai-trener-pelny.md   — cały skill w jednym pliku (ChatGPT Projects, inne asystenty)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILL_DIR="$ROOT/skill/ai-trener"
DIST="$ROOT/dist"
mkdir -p "$DIST"

# 1. ZIP (bez .gitkeep i plików systemowych)
rm -f "$DIST/ai-trener-skill.zip"
(
  cd "$ROOT/skill"
  zip -q -r -X "$DIST/ai-trener-skill.zip" ai-trener \
    -x '*.DS_Store' -x '*/.gitkeep'
)

# 2. Jeden plik Markdown: SKILL.md, potem references, metodologie, evals, szablon-vault
OUT="$DIST/ai-trener-pelny.md"
VERSION="$(grep -m1 '^wersja_paczki:' "$SKILL_DIR/szablon-vault/AI Trener/00 Start.md" | awk '{print $2}')"
{
  echo "# AI Trener — pełny skill w jednym pliku (wersja ${VERSION})"
  echo
  echo "Każda sekcja zaczyna się od ścieżki pliku względnej wobec folderu skilla \`ai-trener/\`."
  echo "Pliki z \`szablon-vault/AI Trener/\` to szablony projektu biegacza: przy instalacji odtwórz je z tą samą strukturą folderów."
  echo
  (
    cd "$SKILL_DIR"
    {
      echo "SKILL.md"
      find references -type f -name '*.md' | sort
      find metodologie -type f -name '*.md' | sort
      find evals -type f -name '*.md' | sort
      find szablon-vault -type f -name '*.md' | sort
    } | while IFS= read -r f; do
      echo
      echo "================================================================"
      echo "PLIK: ${f}"
      echo "================================================================"
      echo
      cat "$f"
    done
  )
} > "$OUT"

echo "Gotowe:"
ls -l "$DIST"
unzip -l "$DIST/ai-trener-skill.zip" | tail -1
