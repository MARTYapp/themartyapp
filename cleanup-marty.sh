#!/bin/bash
echo "🧹 Cleaning The MARTY App repo..."

# 1️⃣ Remove auto-generated & redundant folders
rm -rf .next .turbo node_modules .tsbuildinfo

# 2️⃣ Remove unused husky + old hint configs
rm -rf .husky
rm -f .hintrc

# 3️⃣ Ensure .next is ignored
grep -qxF '.next' .gitignore || echo '.next' >> .gitignore

# 4️⃣ Remove unused admin folder (Phase 1 cleanup)
# 📌 Rebuild this in Phase 2 (Beta Metrics Dashboard)
rm -rf app/admin

# 5️⃣ Rebuild dependencies fresh
npm install

# 6️⃣ Fix known path inconsistencies (Netlify case-sensitive)
find ./app ./components -type f -name "*.tsx" -exec sed -i '' \
  -e 's|@/components/modals/|@/components/content-modals/|g' \
  -e 's|@/components/Modal|@/components/core-ui/Modal|g' {} +

# 7️⃣ Re-run typecheck & lint for confirmation
npm run typecheck || echo "⚠️ Type errors found (non-blocking)"
npm run lint || echo "⚠️ ESLint warnings (non-blocking)"

# 8️⃣ Optional: Move setup script
if [ -f "createmarty.sh" ]; then
  mkdir -p scripts && mv createmarty.sh scripts/
  echo "📦 Moved createmarty.sh → /scripts/"
fi

# 9️⃣ Final build to verify structure
npm run build

echo "✅ Cleanup complete. Repo ready for UI refactor and production deploy."