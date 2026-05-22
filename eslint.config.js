import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
    {
        files: [
            "src/components/**/*.{js,mjs,cjs,jsx}",
            "src/pages/**/*.{js,mjs,cjs,jsx}",
            "src/Layout.jsx",
        ],
        ignores: ["src/lib/**/*", "src/components/ui/**/*"],
        ...pluginJs.configs.recommended,
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        plugins: {
            "react-hooks": pluginReactHooks,
        },
        rules: {
            "no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-explicit-any": "off",
            "react-hooks/rules-of-hooks": "error",
        },
    },
];
