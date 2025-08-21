import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import _import from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
    )),

    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        "jsx-a11y": fixupPluginRules(jsxA11Y),
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            __IS_DEV__: true,
            __API__: true,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },

        "import/resolver": {
            typescript: true,
            node: true,
        },
    },

    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "func-names": "warn",
        "import/default": "off",
        "import/export": "off",
        "import/extensions": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/no-duplicates": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",

        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
        }],

        "no-console": "warn",
        "no-param-reassign": "off",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "warn",
        "no-unused-vars": "warn",
        "react/display-name": "off",
        "react/function-component-definition": "off",

        "react/jsx-filename-extension": [2, {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }],

        "react/jsx-props-no-spreading": "warn",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react-hooks/react-compiler": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
    },
}, {
    files: ["**/src/**/*.{test,stories}.{ts,tsx}"],

    rules: {
        "max-len": "off",
    },
}]);
