# 🔥🔥🔥🔥 react native app with @tanna 

## 🤔 Clone 
```base
git clone https://github.com/tannguyen208/react.native.git <your_app_name>
cd <your_app_name>
```
## 🤔 Installation

Use the package manager [tanna](https://github.com/tannguyen208/react.native) to install tanna.

```bash
npm install
// or
yarn install
```

## 🤔 Usage
What simply works for me several times is instructed below.
01. First copy the directory which your to-be-name-changed application exists. And go to your newly cloned directory.
02. Change the name at index.ios/android.js file which is given as a parameter to AppRegistry.
03. Change the name and version accordingly on package.json.
04. delete /ios and /android folders which are remaining from your older app as well as the app.json file if you have.
05. Generate /ios and /android folders again, run:
```base
react-native upgrade
```
06. For any external dependency, run:
```base
react-native link
```
07. complete. 🤣
## 🤔 Developer
With android
```base
npm run android 
// or
yarn android
```
With ios
```base
npm run ios
// or
yarn ios
```

## 🤔 License
[MIT](https://github.com/tannguyen208/react.native)
## 🤔 Version
1.0.0
