#!/usr/bin/env bash
# Buduje paczki dystrybucyjne obu wersji językowych / Builds distribution packages for both editions:
#   dist/ai-trener-skill.zip, dist/ai-trener-pelny.md  — wersja polska (skill/ai-trener)
#   dist/ai-coach-skill.zip,  dist/ai-coach-full.md    — English edition (skill/ai-coach)
# ZIP: folder skilla w korzeniu (do wgrania w Claude) / skill folder at the root (for upload to Claude).
# .md: cały skill w jednym pliku (ChatGPT Projects, inne asystenty) / whole skill in one file.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"
mkdir -p "$DIST"

# build <skill_dir_name> <zip_name> <md_name> <vault_dir> <version_key> <title> <intro_1> <intro_2> <file_label>
build() {
  local name="$1" zip_name="$2" md_name="$3" vault_dir="$4" version_key="$5"
  local title="$6" intro1="$7" intro2="$8" label="$9"
  local skill_dir="$ROOT/skill/$name"

  rm -f "$DIST/$zip_name"
  (
    cd "$ROOT/skill"
    zip -q -r -X "$DIST/$zip_name" "$name" -x '*.DS_Store' -x '*/.gitkeep' -x '*/__pycache__/*'
  )

  local version
  version="$(grep -m1 "^${version_key}:" "$skill_dir/$vault_dir/00 Start.md" | awk '{print $2}')"
  local out="$DIST/$md_name"
  {
    echo "# ${title} (${version})"
    echo
    echo "$intro1"
    echo "$intro2"
    echo
    (
      cd "$skill_dir"
      {
        echo "SKILL.md"
        for d in references methodology metodologie evals; do
          [ -d "$d" ] && find "$d" -type f -name '*.md' | sort
        done
        find "$(dirname "$vault_dir")" -type f -name '*.md' | sort
      } | while IFS= read -r f; do
        echo
        echo "================================================================"
        echo "${label}: ${f}"
        echo "================================================================"
        echo
        cat "$f"
      done
    )
  } > "$out"
}

build ai-trener ai-trener-skill.zip ai-trener-pelny.md "szablon-vault/AI Trener" wersja_paczki \
  "AI Trener — pełny skill w jednym pliku" \
  "Każda sekcja zaczyna się od ścieżki pliku względnej wobec folderu skilla \`ai-trener/\`." \
  "Pliki z \`szablon-vault/AI Trener/\` to szablony projektu biegacza: przy instalacji odtwórz je z tą samą strukturą folderów." \
  "PLIK"

build ai-coach ai-coach-skill.zip ai-coach-full.md "vault-template/AI Coach" package_version \
  "AI Coach — the whole skill in one file" \
  "Each section starts with the file path relative to the \`ai-coach/\` skill folder." \
  "Files from \`vault-template/AI Coach/\` are the runner's project templates: recreate them with the same folder structure at installation." \
  "FILE"

echo "Gotowe / Done:"
ls -l "$DIST"
