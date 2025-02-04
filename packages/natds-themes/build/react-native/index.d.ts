declare const Themes: Themes.Themes

declare namespace Themes {
  
 export interface Theme {
  asset: Asset
  borderRadius: BorderRadius
  color: Color
  elevation: Elevation
  opacity: Opacity
  size: Size
  spacing: Spacing
  typography: Typography
  alert: Alert
  appBarTop: AppBarTop
  avatar: Avatar
  badge: Badge
  button: Button
  card: Card
  checkbox: Checkbox
  counter: Counter
  dialog: Dialog
  divider: Divider
  expansionPanel: ExpansionPanel
  iconButton: IconButton
  image: Image
  link: Link
  navigationDrawer: NavigationDrawer
  progressIndicator: ProgressIndicator
  radioButton: RadioButton
  rating: Rating
  shortcut: Shortcut
  snackbar: Snackbar
  tab: Counter2
  tag: Tag
  textField: TextField
  heading1: Heading1
  heading2: Heading1
  heading3: Heading1
  heading4: Heading1
  heading5: Heading1
  heading6: Heading1
  subtitle1: Heading1
  subtitle2: Heading1
  body1: Heading1
  body2: Heading1
  caption: Heading1
  overline: Heading1
}
 export interface Heading1 {
  fontSize: number
  fontWeight: number
  lineHeight: number
  letterSpacing: number
}
 export interface TextField {
  label: Title
  content: Title
  helperText: Title
  borderRadius: number
}
 export interface Tag {
  label: Title
  small: Small
  standard: Small
  color: Color12
}
 export interface Color12 {
  background: Background
  label: Background
}
 export interface Background {
  primary: string
  secondary: string
  success: string
  alert: string
  warning: string
  link: string
}
 export interface Small {
  borderRadius: BorderRadius2
}
 export interface Snackbar {
  content: Title
  borderRadius: number
}
 export interface Shortcut {
  label: Title
  contained: Contained2
  outlined: Contained2
  borderRadius: number
}
 export interface Contained2 {
  color: Color11
}
 export interface Color11 {
  enable: Enable3
  disable: Enable3
  hover: Enable3
  focus: Enable3
}
 export interface Enable3 {
  primary: Enable
  neutral: Enable
}
 export interface Rating {
  counter: Counter2
  input: Counter2
}
 export interface Counter2 {
  label: Title
}
 export interface RadioButton {
  label: Title
  borderRadius: number
  color: Color10
}
 export interface Color10 {
  select: Select
  unselect: Select
  disable: Select
}
 export interface Select {
  border: string
  content: string
}
 export interface ProgressIndicator {
  standard: Semi
  semi: Semi
  medium: Semi
  large: Semi
  color: Color9
}
 export interface Color9 {
  stroke: string
  layer: string
}
 export interface NavigationDrawer {
  header: Header
  section: Section
}
 export interface Section {
  title: Title
  item: Title
}
 export interface Header {
  title: Title
  subtitle: Title
}
 export interface Link {
  label: Title
  color: Color8
}
 export interface Color8 {
  label: Label
}
 export interface Label {
  enable: Enable2
}
 export interface Enable2 {
  default: string
  light: string
}
 export interface Image {
  borderRadius: BorderRadius3
}
 export interface BorderRadius3 {
  medium: number
  none: number
}
 export interface IconButton {
  semi: Semi
  semiX: Semi
  medium: Semi
  standard: Standard3
  float: Standard3
  overlay: Standard3
}
 export interface Standard3 {
  color: Color7
}
 export interface Color7 {
  enable: Color5
  disable: Color5
  hover: Color5
  focus: Color5
}
 export interface Semi {
  borderRadius: number
}
 export interface ExpansionPanel {
  title: Title
  borderRadius: number
}
 export interface Divider {
  color: Color5
}
 export interface Dialog {
  title: Title
  body: Title
  borderRadius: number
  color: Color6
}
 export interface Color6 {
  background: string
  title: string
}
 export interface Counter {
  label: Title
  content: Title
  borderRadius: number
}
 export interface Checkbox {
  label: Title
  borderRadius: number
}
 export interface Card {
  borderRadius: BorderRadius2
  color: Color5
}
 export interface Color5 {
  background: string
}
 export interface BorderRadius2 {
  enable: number
  disable: number
}
 export interface Button {
  label: Title
  borderRadius: number
  contained: Contained
  outlined: Contained
  text: Contained
}
 export interface Contained {
  color: Color4
}
 export interface Color4 {
  enable: Enable
  disable: Enable
  hover: Enable
  focus: Enable
}
 export interface Enable {
  background: string
  border: string
  label: string
}
 export interface Badge {
  label: Title
  standard: Standard2
  dot: Standard2
  color: Color3
}
 export interface Color3 {
  primary: Color2
  secondary: Color2
  success: Color2
  alert: Color2
}
 export interface Standard2 {
  height: number
  borderRadius: number
}
 export interface Avatar {
  standard: Standard
  semi: Standard
  semiX: Standard
  medium: Standard
  largeXXX: Standard
  primary: Display
  fallback: Display
  color: Color2
}
 export interface Color2 {
  background: string
  label: string
}
 export interface Standard {
  fontSize: number
  letterSpacing: number
  lineHeight: number
  borderRadius: number
}
 export interface AppBarTop {
  title: Title
}
 export interface Alert {
  title: Title
  content: Title
  borderRadius: number
}
 export interface Title {
  fontSize: number
  letterSpacing: number
  lineHeight: number
  primary: Display
  fallback: Display
}
 export interface Typography {
  fontSize: FontSize
  lineHeight: LineHeight
  fontFamily: FontFamily
  fontWeight: FontWeight
  display: Display
  headline: Display
  body: Body2
  fallback: Display
}
 export interface Body2 {
  regular: Display
  bold: Display
}
 export interface Display {
  fontFamily: string
  fontWeight: number
}
 export interface FontWeight {
  regular: number
  medium: number
}
 export interface FontFamily {
  primary: string
  secondary: string
  branding: string
  code: string
}
 export interface LineHeight {
  auto: number
  reset: number
  small: number
  medium: number
  large: number
}
 export interface FontSize {
  level1: number
  level2: number
  level3: number
  level4: number
  level5: number
  level6: number
  level7: number
  level8: number
  level9: number
  level10: number
  level11: number
  level12: number
  level13: number
  level14: number
  level15: number
  level16: number
  level17: number
}
 export interface Spacing {
  none: number
  micro: number
  tiny: number
  small: number
  standard: number
  semi: number
  large: number
  xLarge: number
}
 export interface Size {
  none: number
  micro: number
  tiny: number
  small: number
  standard: number
  semi: number
  semiX: number
  medium: number
  mediumX: number
  large: number
  largeX: number
  largeXX: number
  largeXXX: number
  huge: number
  hugeX: number
  hugeXX: number
  hugeXXX: number
  veryHuge: number
}
 export interface Opacity {
  transparent: number
  lower: number
  veryLow: number
  low: number
  mediumLow: number
  disabledLow: number
  disabled: number
  medium: number
  mediumHigh: number
  high: number
  veryHigh: number
  opaque: number
}
 export interface Elevation {
  none: None
  micro: None
  tiny: None
  small: None
  medium: None
  large: None
  largeX: None
  largeXX: None
  huge: None
  hugeX: None
  hugeXX: None
}
 export interface None {
  shadowColor: string
  shadowOffsetWidth: number
  shadowOffsetHeight: number
  shadowRadius: number
  shadowOpacity: number
  elevation: number
}
 export interface Color {
  neutral50: string
  neutral100: string
  neutral200: string
  neutral300: string
  neutral400: string
  neutral500: string
  neutral600: string
  neutral700: string
  neutral800: string
  neutral900: string
  primary: string
  onPrimary: string
  primaryLight: string
  onPrimaryLight: string
  primaryLightest: string
  onPrimaryLightest: string
  primaryDark: string
  onPrimaryDark: string
  primaryDarkest: string
  onPrimaryDarkest: string
  secondary: string
  onSecondary: string
  secondaryLight: string
  onSecondaryLight: string
  secondaryLightest: string
  onSecondaryLightest: string
  secondaryDark: string
  onSecondaryDark: string
  secondaryDarkest: string
  onSecondaryDarkest: string
  background: string
  onBackground: string
  surface: string
  onSurface: string
  surfaceInverse: string
  onSurfaceInverse: string
  highlight: string
  highEmphasis: string
  mediumEmphasis: string
  lowEmphasis: string
  lowLight: string
  link: string
  onLink: string
  linkLight: string
  onLinkLight: string
  linkLightest: string
  onLinkLightest: string
  linkDark: string
  onLinkDark: string
  linkDarkest: string
  onLinkDarkest: string
  success: string
  onSuccess: string
  successLight: string
  onSuccessLight: string
  successLightest: string
  onSuccessLightest: string
  successDark: string
  onSuccessDark: string
  successDarkest: string
  onSuccessDarkest: string
  warning: string
  onWarning: string
  warningLight: string
  onWarningLight: string
  warningLightest: string
  onWarningLightest: string
  warningDark: string
  onWarningDark: string
  warningDarkest: string
  onWarningDarkest: string
  alert: string
  onAlert: string
  alertLight: string
  onAlertLight: string
  alertLightest: string
  onAlertLightest: string
  alertDark: string
  onAlertDark: string
  alertDarkest: string
  onAlertDarkest: string
  neutralLightest: string
  neutralLight: string
  neutralMedium: string
  neutralDark: string
  neutralDarkest: string
}
 export interface BorderRadius {
  none: number
  small: number
  medium: number
  large: number
}
 export interface Asset {
  font: Font
  brand: Brand
}
 export interface Brand {
  neutral: Neutral
  custom: Neutral
}
 export interface Neutral {
  a: A
  b: A
}
 export interface A {
  file: string
  width: number
  height: number
  pt: string
  es: string
}
 export interface Font {
  file: File
}
 export interface File {
  display: string
  headline: string
  body: Body
}
 export interface Body {
  regular: string
  bold: string
}

  export interface BrandThemes {
    dark: Theme
    light: Theme
  }

  export interface Themes {
    aesop: BrandThemes
    avon: BrandThemes
    avon_v2: BrandThemes
    biome: BrandThemes
    natdsTest: BrandThemes
    natura: BrandThemes
    theBodyShop: BrandThemes
    consultoriaDeBeleza: BrandThemes
    natura_v2: BrandThemes
    casaEestilo: BrandThemes
  }
}

export = Themes