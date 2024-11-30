#!/bin/bash

# Check if component name is provided
if [ -z "$1" ]; then
    echo "Error: Module name is missing."
    echo "Usage: ./create_module.sh <componentName>"
    exit 1
fi

component_name="$1"
component_name_upper="$(tr '[:lower:]' '[:upper:]' <<< ${component_name:0:1})${component_name:1}"
component_dir="./src/modules/$component_name"

# Check if component directory already exists
if [ -d "$component_dir" ]; then
    echo "Error: Component directory already exists."
    exit 1
fi

# Create module directory and subdirectories
mkdir -p "$component_dir/assets/icons"
mkdir -p "$component_dir/assets/images"
mkdir -p "$component_dir/data"
mkdir -p "$component_dir/utils"
mkdir -p "$component_dir/components"
mkdir -p "$component_dir/routes"

# Create main component file
touch "$component_dir/${component_name_upper}.tsx"
touch "$component_dir/_${component_name_upper}.scss"

# Create styles index file for components
touch "$component_dir/components/_index.scss"

# Create data files
touch "$component_dir/data/${component_name}Slice.ts"
touch "$component_dir/data/${component_name}Thunk.ts"
touch "$component_dir/data/${component_name}Types.ts"

# Create routes files
touch "$component_dir/routes/paths.ts"
touch "$component_dir/routes/routes.ts"

# Add basic component template to the TypeScript file
echo "import React from 'react';

export interface ${component_name_upper}Props {
  // Define props here
}

const ${component_name_upper}: React.FC<${component_name_upper}Props> = () => {
  return <div>${component_name}</div>;
};

export default ${component_name_upper};
" > "$component_dir/${component_name_upper}.tsx"

# Add example slice to the slice file
echo "import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ${component_name_upper}State {
  example: string;
}

const initialState: ${component_name_upper}State = {
  example: '',
};

const ${component_name}Slice = createSlice({
  name: '${component_name}',
  initialState,
  reducers: {
    setExample(state, action: PayloadAction<string>) {
      state.example = action.payload;
    },
  },
});

export const { setExample } = ${component_name}Slice.actions;
export default ${component_name}Slice.reducer;
" > "$component_dir/data/${component_name}Slice.ts"

# Add example thunk to the thunk file
echo "import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const start${component_name_upper} = createAsyncThunk(
  '${component_name}/start-${component_name}',
  async ({ id, coupon_code }: { id: string | undefined; coupon_code: string }, thunkApi) => {
    try {
      const response = await axios.post('/api/v1/${component_name}/${component_name}s/\${id}/start/', {
        coupon_code,
      })

      if (response.status === 200) {
        return response.data
      }

      throw new Error(response.statusText)
    } catch (err: any) {
      return thunkApi.rejectWithValue(err)
    }
  },
)
" > "$component_dir/data/${component_name}Thunk.ts"

# Add types to the types file
echo "export interface ${component_name_upper}Example {
  id: string;
  value: string;
}
" > "$component_dir/data/${component_name}Types.ts"

# Add paths file
echo "export const PATH = {
  MYQUIZZES: '/myQuizzes',
}
" > "$component_dir/routes/paths.ts"

# Add routes file
echo "/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, lazy } from 'react'
import { RouteProps } from 'react-router-dom'
import { PATH } from './paths'
import AuthGuard from '@src/modules/shared/guards/AuthGuard'
import MainLayout from '@src/modules/shared/layout/MainLayout/MainLayout'

type RouteConfig = {
  exact: boolean | null
  path: string
  component: React.ComponentType<any>
  guard?: React.ComponentType<any> | typeof Fragment | any
  layout?: React.ComponentType<any> | typeof Fragment
} & RouteProps

const routes: RouteConfig[] = [
  {
    exact: true,
    guard: AuthGuard,
    path: PATH.MYQUIZZES,
    component: lazy(() => import('../MyQuizzes')),
    layout: MainLayout,
  },
]

export default routes
" > "$component_dir/routes/routes.ts"

# Forward the _index.scss and component.scss of the components
echo "@forward './components';
@forward './_${component_name_upper}.scss';" > "$component_dir/_index.scss"

# Update shared routes to include the new module routes
shared_routes_file="./src/modules/shared/routes/routes.tsx"
awk -v component_name="$component_name" '
    /import sharedRoutes from/ {
        print;
        print "import " component_name "Routes from \"../../" component_name "/routes/routes\"";
        next;
    }
    /const routes = \[/ {
        print;
        print "  ..." component_name "Routes,";
        next;
    }
    { print }
' "$shared_routes_file" > "$shared_routes_file.tmp" && mv "$shared_routes_file.tmp" "$shared_routes_file"

echo "Updated $shared_routes_file to include ${component_name} routes."

# Update modules index.scss to forward the new module styles
modules_index_file="./src/modules/index.scss"
awk -v module="@use \"./${component_name}\";" '
    { print }
    END { print module; }
' "$modules_index_file" > "$modules_index_file.tmp" && mv "$modules_index_file.tmp" "$modules_index_file"

echo "Updated $modules_index_file to include ${component_name} styles."

# Update rootReducer to include the new module slice
root_reducer_file="./src/modules/shared/store/rootReducer.ts"
awk -v component_name="$component_name" '
    /import themeReducer from/ {
        print;
        print "import " component_name "Reducer from \"../../" component_name "/data/" component_name "Slice\"";
        next;
    }
    /const rootReducer = combineReducers\(\{/ {
        print;
        print "  " component_name ": " component_name "Reducer,";
        next;
    }
    { print }
' "$root_reducer_file" > "$root_reducer_file.tmp" && mv "$root_reducer_file.tmp" "$root_reducer_file"

echo "Updated $root_reducer_file to include ${component_name} slice."

echo "Component module '$component_name' created successfully in 'src/modules/$component_name' directory."
