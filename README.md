# RN-Repo

Contains React Native Course Codes.

### Course content

#### LESSON 02
- 201021.01. React-Native installation on MACOS
- 201021.02. Emulator Controls
- 201021.03. Styles
- 201021.04. Flex & FlexDirection
- 201021.05. Questions
- 201021.06. Border Usage
- 201021.07. React Native Snippet
- 201021.08. Components
- 201021.09. Props&PropTypes
- 201021.10. Events
- 201021.11. State
- 201021.12. Counter App (HomeWork)

#### LESSON 03
- 231021.01. Summary
- 231021.02. Counter App
- 231021.03. Images
- 231021.04. Touchables (TouchableOpacity & TouchableHighlight)
- 231021.05. TextInput
- 231021.06. ScrollView
- 231021.07. Dimensions
- 231021.08. SafeAreaView
 
#### LESSON 04
- 241021.01. Summary
- 241021.02. FlatList (data, renderItem, keyExtractor, listEmptyComponent, itemSeperatorComponent)
- 241021.03. FlatList - Row-CSS
- 241021.04. FlatList - ListHeaderComponent - Search CSS
- 241021.05. FlatList - ListHeaderComponent - Search Filter
- 240121.06. Homework
- 240121.07. Platform
- 240121.08. Using Different Components According to Operating System

#### LESSON 05
- 271021.01. Create First App (RNCS)
- 271021.02. Folder struct
- 271021.03. Create Login.js and Header
- 271021.04. Login box
- 271021.05. App Text & Description
- 271021.06. Login Form
- 271021.07. ReturnKeyType
- 271021.08. Go to Password Input
- 271021.09. KeyboardAvoidingView
- 271021.10. Button Component
- 271021.11. Sign Up Field

#### LESSON 06

- 031121.01. Create App
```javascript
npx react-native init callApiSample
```
- 031121.02. Call API
- 031121.03. Loading
- 031121.04. Refresh Call API with Button
- 031121.05. Async-Await on call API
- 031121.06. View API Data on FlatList
- 031121.07. Loading with ActivityIndicator on FlatList
- 031121.08. Loading with ActivityIndicator on FlatList-2
- 031121.09. Bug Fixed for Filter
- 031121.10. Bug Fixed for Filter-2
- 031121.11. Infinite Scroll (onEndReached & onEndReachedThreshold)
- 031121.12. Bug Fixed Infinite Scroll Searching
- 031121.13. Pull to Refresh (onRefresh Refreshing)

#### LESSON 07
- 06112021.01. React Navigation<
```javascript
npm install @react-navigation/native<br/>
npm install react-native-screens react-native-safe-area-context<br/>
```
###### if using IOS; npx pod-install ios<br/>
- 06112021.02. React Navigation & Navigation Types<br/>
Drawer + Tab + Stack = NESTING
- 06112021.03. Installing the Native-Stack-Navigator Lib<br/>
```javascript
npm install @react-navigation/native-stack
```
- 06112021.04. Create a Stack-Navigator
- 06112021.05. Bug Fixed & Configuring The Navigator
- 06112021.06. Specifying Options (Options & screenOptions)
- 06112021.07. Passing Props
- 06112021.08. Moving Between Screens (navigation.navigate)
- 06112021.09. Navigate to a route many times (navigation.push)
- 06112021.10. Going Back (goBack & popToTop)
- 06112021.11. Passing Parameters to Route
- 06112021.12. Updating Params (setParams & setOptions)
- 06112021.13. Initial Params (Set default value) - initialParams

#### LESSON 08
- 07.11.2021.01. Summary
- 07.11.2021.02. Passing params to previous screen
- 07.11.2021.03. What should be in params
- 07.11.2021.04. Configure the Header - Set Title
- 07.11.2021.05. Configure the Header - Using Params in Title
- 07.11.2021.06. Configure the Header - Updating options with setOptions()
- 07.11.2021.07. Configure the Header - Adjusting header styles<br/>
headerStyle , headerTintColor, headerTitleStyle
- 07.11.2021.08. Configure the Header - Sharing Common options across all screen
- 07.11.2021.09. Configure the Header - Replacing the title with a custom component (headerTitle)
- 07.11.2021.10. Header Buttons - Adding a button to the header
- 07.11.2021.11. Folder structure for Navigator

#### LESSON 09
- 10112021.01. Summary
- 10112021.02. Header interaction with its screen component
- 10112021.03. useEffect vs useLayoutEffect
- 10112021.04. Customizing the Back Button<BR/>
headerBackTitleStyle headerBackImageSource / headerLeft
- 10112021.05. Tab Navigation
- 10112021.06. Customizing the Appearance
- 10112021.07. Add badge icon to tab menu
- 10112021.08. Jumping between tabs
- 10112021.09. Drawer Navigation
- 10112021.10. open/close/toggle Drawer & get drawer status
- 10112021.11. BUG FIXED

#### LESSON 10
- 12112021.01. Installation Image-Picker
- 12112021.02. Set the Permissions
- 12112021.03. Use RN-Image Picker Lib.
- 12112021.04. Create Button Comp with style
- 12112021.05. Permisson Control Method For Android
- 12112021.06. Permisson Control Method For Android-V2
- 12112021.07. Create state
- 12112021.08. Write Capture Photo Func From Camera
- 12112021.09. Write Choose File Func From Device Library/Gallery
- 12112021.10. Create Components
- 12112021.11. Bug Fixed && Summary this Lesson
- 12112021.12. Improve Code

#### LESSON 11
- 13112021.01. Summary
- 13112021.02. Upload Image to API (WebService)
- 13112021.03. Create Method for API Upload
- 13112021.04. Image Upload To Local Server/NodeJS-Server
- 13112021.05. Improving the Design
- 13112021.06. Loading
- 13112021.07. Error Handling
- 13112021.08. Animations -> AnimatedAPI & LayoutAnimationAPI
- 13112021.09. AnimatedAPI -> Animated.createAnimatedComponent()


#### LESSON 12
- 14112021.01. Summary
- 14112021.02. Animated Configuration & Animated Methods<br/>
Animated.timing()  Animated.decay() Animated.spring()<br/>
Animated.parallel() Animated.sequence() Animated.stagger()
- 14112021.03. Animated.timing() <br/>
(toValue-easing-duration-delay)
- 14112021.04. Rotate Example with Timing
- 14112021.05. Easing
- 14112021.06. Interpolate

#### Lesson 13
- 18112021.01. Summary
- 18112021.02. Spring Method
- 18112021.03. Spring Method (Codes)
- 18112021.04. Animated.parallel()
- 18112021.05. BUG-FIXED: Animated.parallel()
- 18112021.06. Animated.sequence()
- 18112021.07. Animated.stagger()
- 18112021.08. LayoutAnimation API

#### LESSON 14
- 19112021.01. LayoutAnimation API
- 19112021.02. First App - LayoutAnimation Sample01
- 19112021.03. LayoutAnimation Methods
##### configureNext
static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)
static configureNext({},func?,func?)
##### create
static create(duration, type, creationProp)
- 19112021.04. Using Methods - LayoutAnimation Sample02
- 19112021.05. Using default types - LayoutAnimation Sample03
##### Spring , linear, easeInEaseOut

#### LESSON 15
- 22112021.01. Introduction
- 22112021.02. Use Native Driver
- 22112021.03. Animated.Decay()
- 22112021.04. useRef
- 22112021.05. useRef vs useState
- 22112021.06. Hook - .current
- 22112021.07. Animated.event
- 22112021.08. PanResponder
- 22112021.09. PanResponder Create on Components
- 22112021.10. PanResponder Default Methods
- 22112021.11. gestureState
- 22112021.12. Drag example with decay method


#### LESSON 16
- 24112021.01. Installation and Initial Example
- 24112021.02. Google API Key<br/>
[Open Console](http://console.cloud.google.com) 
- 24112021.03. Open Google Services on Genymotion
- 24112021.04. Configuration for IOS
// in AppDelegate.m (/ios/[ProjectName]/AppDelegate.m)
```swift
#import <GoogleMaps/GoogleMaps.h>
//in didFinishLaunchingWithOptions Function
[GMSServices provideAPIKey:@"YOUR_API_KEY"];
```

```swift
// in Podfile (/ios/Podfile)
# React Native Maps dependencies
rn_maps_path = '../node_modules/react-native-maps'
pod 'react-native-google-maps', :path => rn_maps_path
pod 'GoogleMaps'
pod 'Google-Maps-iOS-Utils'
```
- 24112021.05. Configuration for Android
```kotlin
// in build.gradle (/android/build.gradle)
playServicesVersion = "18.0.0"
```

```kotlin
// in AndroidManifest (/android/app/src/main/AndroidManifest.xml)
...
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_API_KEY"/>
<uses-library android:name="org.apache.http.legacy" android:required="false"/>
    </application>
```
- 24112021.06. InitialRegion - Region
- 24112021.07. Region Sample
- 24112021.08. Zoom on Emulator 
- 24112021.09. Loading
- 24112021.10. Markers
- 24112021.11. Displaying Multiple Markers
- 24112021.12. Custom Marker Icon
- 24112021.13. Using View in Marker
- 24112021.14. Using Comp. in Marker (Animated Marker)
- 24112021.15. Show User Location
```kotlin
// in AndroidManifest (/android/app/src/main/AndroidManifest.xml)
<uses-permission android:name="android.permission.ACCESS_COURSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
- 24112021.16. Permisson for Android
- 24112021.17. Get Current Location
