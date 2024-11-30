#!/bin/bash

# Check if component name is provided
if [ -z "$1" ]; then
    echo "Error: Module name is missing."
    echo "Usage: ./scripts/delete_module.sh <componentName>"
    exit 1
fi

component_name="$1"
component_name_upper="$(tr '[:lower:]' '[:upper:]' <<< ${component_name:0:1})${component_name:1}"
component_dir="./src/modules/$component_name"

# Check if component directory exists
if [ ! -d "$component_dir" ]; then
    echo "Error: Component directory does not exist."
    exit 1
fi

# Delete module directory
rm -rf "$component_dir"
echo "Deleted directory: $component_dir"

# Update shared routes to remove the module routes
shared_routes_file="./src/modules/shared/routes/routes.tsx"
awk -v component_name="$component_name" '
    !/import '"$component_name"'Routes from/ && !/\.\.\. '"$component_name"'Routes,/ { print }
' "$shared_routes_file" > "$shared_routes_file.tmp" && mv "$shared_routes_file.tmp" "$shared_routes_file"

echo "Updated $shared_routes_file to remove ${component_name} routes."

# Update modules index.scss to remove the module styles
modules_index_file="./src/modules/index.scss"
awk -v module="@use \"./${component_name}\";" '
    !index($0, module) { print }
' "$modules_index_file" > "$modules_index_file.tmp" && mv "$modules_index_file.tmp" "$modules_index_file"

echo "Updated $modules_index_file to remove ${component_name} styles."

# Update rootReducer to remove the module slice
root_reducer_file="./src/modules/shared/store/rootReducer.ts"
awk -v component_name="$component_name" -v component_name_upper="$component_name_upper" '
    !/import '"$component_name"'Reducer from/ && !/'"$component_name"': '"$component_name"'Reducer,/ { print }
' "$root_reducer_file" > "$root_reducer_file.tmp" && mv "$root_reducer_file.tmp" "$root_reducer_file"

echo "Updated $root_reducer_file to remove ${component_name} slice."

echo "Component module '$component_name' deleted successfully from 'src/modules/$component_name' directory."
