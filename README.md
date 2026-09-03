# React-useContext-ThemeToggleApp

Reactの `useContext` を使って、アプリ全体でテーマ（ライト / ダーク）を共有・切り替える練習用アプリです。

## 📌 概要

`ThemeContext` でテーマ状態を管理し、`ThemeProvider` を通して子コンポーネントへ状態とテーマ切り替え関数を共有します。

`ThemedBox` では現在のテーマを表示し、`ThemeToggleButton` からテーマを切り替えます。

## 🛠 使用技術

* React
* TypeScript
* useContext
* useState
* Tailwind CSS
* Vite

## 📁 ディレクトリ構成

```text
src/
├── components/
│   ├── ThemeBox.tsx
│   └── ThemeToggleButton.tsx
├── contexts/
│   └── ThemeContext.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 🔍 学習ポイント

### 1. Contextの作成

`createContext` を使用してテーマ情報を共有します。

```tsx
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

### 2. Providerによる状態共有

`ThemeProvider` で `isDark` と `toggleTheme` を子コンポーネントへ渡します。

```tsx
<ThemeContext.Provider value={{ isDark, toggleTheme }}>
  {children}
</ThemeContext.Provider>
```

### 3. useContextでContextを取得

カスタムフック `useTheme` を作成し、各コンポーネントからContextを利用できるようにしています。

```tsx
const { isDark, toggleTheme } = useTheme();
```

### 4. useStateによるテーマ管理

```tsx
const [isDark, setIsDark] = useState<boolean>(false);
```

テーマ切り替え時には現在の状態を反転させます。

```tsx
const toggleTheme = () => {
  setIsDark((prev) => !prev);
};
```

## 🎯 アプリの動作

初期状態ではライトテーマが表示されます。

```text
現在のテーマ: ライト
```

「テーマを切り替える」ボタンを押すとダークテーマへ変更されます。

```text
現在のテーマ: ダーク
```

もう一度押すとライトテーマへ戻ります。

## ▶️ 起動方法

```bash
npm install
npm run dev
```

表示されたURLをブラウザで開いてください。

