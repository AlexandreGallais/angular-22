// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import ts from 'typescript-eslint';
import angular from 'angular-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([{
  files: ['**/*.ts', '**/*.html'],
  extends: [prettier],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleAttributePerLine: true,
      },
    ],
  },
}, {
  files: ['**/*.ts'],
  extends: [eslint.configs.all, ts.configs.all, angular.configs.tsAll],
  processor: angular.processInlineTemplates,
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
    'func-style': ['error', 'declaration', { allowTypeAnnotation: true }],
    'new-cap': 'off',
    'no-duplicate-imports': 'off',
    'no-ternary': 'off',
    'one-var': 'off',
    'sort-keys': 'off',
    'sort-imports': 'off',
    '@typescript-eslint/class-methods-use-this': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/member-ordering': 'off',

    // ────────────────────────────────────────────────────────────────
    // ⚠️ Règles activées par eslint.configs.all / ts.configs.all /
    // angular.configs.tsAll qui sont des NO-OP tant qu'on ne leur donne
    // pas de valeur : leur option par défaut est vide ou trop permissive,
    // donc la règle est "error" mais ne remonte jamais rien.
    // ────────────────────────────────────────────────────────────────
    // 'id-denylist': ['error', /* ex: 'e', 'data', 'err', 'cb' */],
    // 'id-match': ['error', '^[a-zA-Z]+$'], // défaut "^.+$" -> matche tout, ne sert à rien
    // 'no-restricted-globals': ['error', /* ex: 'event', 'fdescribe', 'name' */],
    // 'no-restricted-imports': ['error', { paths: [], patterns: [] }],
    // 'no-restricted-properties': ['error' /*, { object: '...', property: '...' } */],
    // 'no-restricted-syntax': ['error' /*, 'WithStatement' */],
    // 'no-restricted-exports': ['error', { restrictedNamedExports: [] }],
    // '@typescript-eslint/no-restricted-types': ['error', { types: {} }],
    // '@angular-eslint/no-input-prefix': ['error', { prefixes: [] }], // défaut [] -> aucun préfixe interdit
    // '@angular-eslint/pipe-prefix': ['error', { prefixes: [] }], // défaut [] -> aucune contrainte

    // ────────────────────────────────────────────────────────────────
    // ⚠️ Règles à seuil ("max-*"/complexity) : activées avec une valeur
    // par défaut arbitraire (pas un no-op, mais à ajuster au projet).
    // ────────────────────────────────────────────────────────────────
    // 'complexity': ['error', 20],
    // 'max-classes-per-file': ['error', 1],
    // 'max-depth': ['error', 4],
    // 'max-lines': ['error', 300],
    // 'max-lines-per-function': ['error', 50],
    // 'max-nested-callbacks': ['error', 10],
    // 'max-params': ['error', 3], // remplacée par @typescript-eslint/max-params ci-dessous
    // '@typescript-eslint/max-params': ['error', { max: 3 }],
    // 'max-statements': ['error', 10],
    // '@angular-eslint/component-max-inline-declarations': ['error', { template: 3, styles: 3, animations: 15 }],
  },
}, {
  files: ['**/*.html'],
  extends: [angular.configs.templateAll],
  rules: {
    '@angular-eslint/template/i18n': 'off',
    '@angular-eslint/template/prefer-ngsrc': 'off',
    '@angular-eslint/template/alt-text': 'off',
    '@angular-eslint/template/no-call-expression': 'off',

    // ⚠️ Règles à seuil de angular.configs.templateAll, à ajuster au projet.
    // '@angular-eslint/template/conditional-complexity': ['error', { maxComplexity: 5 }],
    // '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 5 }],
  },
}, ...storybook.configs["flat/recommended"]]);
