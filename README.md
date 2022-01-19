# RN food delivery

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

<!-- Tables -->

| Name     | Email                 |
| :------- | --------------------- |
| Tim Chen | tim20136202@gmail.com |

Screen snapshots

<img src=".\screenshot\Home.png" alt="Home" style="width: 400px, object-fit: contain;" />

（Home screen）

<img src=".\screenshot\restaurantDetail.png" alt="restaurantDetail" style="width: 400px, object-fit: contain;" />

(Restaurant details screen)

<img src=".\screenshot\orderCompleted.png" alt="orderCompleted" style="width: 400px, object-fit: contain;" />

(Completed Order screen)



## 🚀 Functionality

#### 1. Search(Home)

1.1 Autocompleted with "react-native-google-places-autocomplete"

1.2 Google place api

1.3 Store the place by useState hook

#### 2. Categories(Home)

2.1 Horizontal view to display different kinds of categories with "react-native-elements"

2.2 Select one of them to change the content of home screen

#### 3. Restaurant item(Home)

3.1 Use Yelp api to fetch the data of restaurant by place

3.2 Display them with scroll view

#### 4. Menu item(Restaurant detail)

4.1 Display item with scrollview

4.2 Display checkbox with "react-native-bouncy-checkbox"

4.3 Manage view cart with "react-redux"

4.4 Display loading animation with "lottie-react-native" and "react-native-reanimated"

#### 5. Order completed (Order completed)

5.1 Fetch firebase to get the lastest order

5.2 Display animation like 4.4

5.3 Display order details



## The things that I have not done

##### 1. Authorization section

##### 2. Advertisements section

##### 3. Comments section

##### 4. UI/UX test (some indicator should be in some section of the webpage)

##### 5. Integration with Existing Apps

##### 6. Deployment with RN.



## Issues

##### 1. @react-navigation/stack error

```javascript
Solution:
	install package
	"@react-native-community/masked-view"
	"react-native-safe-area-context"
```

**2. Avoid error by RN**

```javascript
install ts library
	"tslib"
```



## 📝 What I have learn

##### 1. use RN build screens by View, ScrollView, Text, ...

##### 2. use naigation package to navigate to another page with (object)

##### 3. use react-redux to store order state

##### 4. use yelp api to get data and firebase to store data (as backend)

##### 5. React hook:  useState, useEffect, useMemo

