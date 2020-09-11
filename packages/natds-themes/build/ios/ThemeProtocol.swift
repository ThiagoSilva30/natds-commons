/***
 *
 *  ███╗   ██╗ █████╗ ████████╗██████╗ ███████╗   ████████╗██╗  ██╗███████╗███╗   ███╗███████╗███████╗
 *  ████╗  ██║██╔══██╗╚══██╔══╝██╔══██╗██╔════╝   ╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝██╔════╝
 *  ██╔██╗ ██║███████║   ██║   ██║  ██║███████╗█████╗██║   ███████║█████╗  ██╔████╔██║█████╗  ███████╗
 *  ██║╚██╗██║██╔══██║   ██║   ██║  ██║╚════██║╚════╝██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  ╚════██║
 *  ██║ ╚████║██║  ██║   ██║   ██████╔╝███████║      ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗███████║
 *  ╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚══════╝      ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝
 *                                                                                                       
 *  https://github.com/natura-cosmeticos/natds-commons/tree/master/packages/natds-themes
 *  
 *  Generated by natds-themes in Fri Sep 11 2020
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

protocol ThemeProtocol {
  var tokens: TokensProtocol
  var components: ComponentsProtocol
}

protocol TokensProtocol {
  var borderRadiusNone: CGFloat { get }
  var borderRadiusSmall: CGFloat { get }
  var borderRadiusMedium: CGFloat { get }
  var borderRadiusLarge: CGFloat { get }
  var colorPrimary: UIColor { get }
  var colorOnPrimary: UIColor { get }
  var colorPrimaryLight: UIColor { get }
  var colorOnPrimaryLight: UIColor { get }
  var colorPrimaryDark: UIColor { get }
  var colorOnPrimaryDark: UIColor { get }
  var colorSecondary: UIColor { get }
  var colorOnSecondary: UIColor { get }
  var colorSecondaryLight: UIColor { get }
  var colorOnSecondaryLight: UIColor { get }
  var colorSecondaryDark: UIColor { get }
  var colorOnSecondaryDark: UIColor { get }
  var colorBackground: UIColor { get }
  var colorOnBackground: UIColor { get }
  var colorSurface: UIColor { get }
  var colorOnSurface: UIColor { get }
  var colorHighlight: UIColor { get }
  var colorHighEmphasis: UIColor { get }
  var colorMediumEmphasis: UIColor { get }
  var colorLowEmphasis: UIColor { get }
  var colorLink: UIColor { get }
  var colorOnLink: UIColor { get }
  var colorSuccess: UIColor { get }
  var colorOnSuccess: UIColor { get }
  var colorWarning: UIColor { get }
  var colorOnWarning: UIColor { get }
  var colorAlert: UIColor { get }
  var colorOnAlert: UIColor { get }
  var elevationNoneShadowColor: String { get }
  var elevationNoneShadowOffsetWidth: CGFloat { get }
  var elevationNoneShadowOffsetHeight: CGFloat { get }
  var elevationNoneShadowRadius: CGFloat { get }
  var elevationNoneShadowOpacity: CGFloat { get }
  var elevationMicroShadowColor: String { get }
  var elevationMicroShadowOffsetWidth: CGFloat { get }
  var elevationMicroShadowOffsetHeight: CGFloat { get }
  var elevationMicroShadowRadius: CGFloat { get }
  var elevationMicroShadowOpacity: CGFloat { get }
  var elevationTinyShadowColor: String { get }
  var elevationTinyShadowOffsetWidth: CGFloat { get }
  var elevationTinyShadowOffsetHeight: CGFloat { get }
  var elevationTinyShadowRadius: CGFloat { get }
  var elevationTinyShadowOpacity: CGFloat { get }
  var elevationSmallShadowColor: String { get }
  var elevationSmallShadowOffsetWidth: CGFloat { get }
  var elevationSmallShadowOffsetHeight: CGFloat { get }
  var elevationSmallShadowRadius: CGFloat { get }
  var elevationSmallShadowOpacity: CGFloat { get }
  var elevationMediumShadowColor: String { get }
  var elevationMediumShadowOffsetWidth: CGFloat { get }
  var elevationMediumShadowOffsetHeight: CGFloat { get }
  var elevationMediumShadowRadius: CGFloat { get }
  var elevationMediumShadowOpacity: CGFloat { get }
  var elevationLargeShadowColor: String { get }
  var elevationLargeShadowOffsetWidth: CGFloat { get }
  var elevationLargeShadowOffsetHeight: CGFloat { get }
  var elevationLargeShadowRadius: CGFloat { get }
  var elevationLargeShadowOpacity: CGFloat { get }
  var elevationLargeXShadowColor: String { get }
  var elevationLargeXShadowOffsetWidth: CGFloat { get }
  var elevationLargeXShadowOffsetHeight: CGFloat { get }
  var elevationLargeXShadowRadius: CGFloat { get }
  var elevationLargeXShadowOpacity: CGFloat { get }
  var elevationLargeXXShadowColor: String { get }
  var elevationLargeXXShadowOffsetWidth: CGFloat { get }
  var elevationLargeXXShadowOffsetHeight: CGFloat { get }
  var elevationLargeXXShadowRadius: CGFloat { get }
  var elevationLargeXXShadowOpacity: CGFloat { get }
  var elevationHugeShadowColor: String { get }
  var elevationHugeShadowOffsetWidth: CGFloat { get }
  var elevationHugeShadowOffsetHeight: CGFloat { get }
  var elevationHugeShadowRadius: CGFloat { get }
  var elevationHugeShadowOpacity: CGFloat { get }
  var elevationHugeXShadowColor: String { get }
  var elevationHugeXShadowOffsetWidth: CGFloat { get }
  var elevationHugeXShadowOffsetHeight: CGFloat { get }
  var elevationHugeXShadowRadius: CGFloat { get }
  var elevationHugeXShadowOpacity: CGFloat { get }
  var elevationHugeXXShadowColor: String { get }
  var elevationHugeXXShadowOffsetWidth: CGFloat { get }
  var elevationHugeXXShadowOffsetHeight: CGFloat { get }
  var elevationHugeXXShadowRadius: CGFloat { get }
  var elevationHugeXXShadowOpacity: CGFloat { get }
  var opacityTransparent: CGFloat { get }
  var opacityLower: CGFloat { get }
  var opacityVeryLow: CGFloat { get }
  var opacityLow: CGFloat { get }
  var opacityMediumLow: CGFloat { get }
  var opacityDisabledLow: CGFloat { get }
  var opacityDisabled: CGFloat { get }
  var opacityMedium: CGFloat { get }
  var opacityMediumHigh: CGFloat { get }
  var opacityHigh: CGFloat { get }
  var opacityVeryHigh: CGFloat { get }
  var opacityOpaque: CGFloat { get }
  var sizeNone: CGFloat { get }
  var sizeMicro: CGFloat { get }
  var sizeTiny: CGFloat { get }
  var sizeSmall: CGFloat { get }
  var sizeStandard: CGFloat { get }
  var sizeSemi: CGFloat { get }
  var sizeSemiX: CGFloat { get }
  var sizeMedium: CGFloat { get }
  var sizeMediumX: CGFloat { get }
  var sizeLarge: CGFloat { get }
  var sizeLargeX: CGFloat { get }
  var sizeLargeXX: CGFloat { get }
  var sizeLargeXXX: CGFloat { get }
  var sizeHuge: CGFloat { get }
  var sizeHugeX: CGFloat { get }
  var sizeHugeXX: CGFloat { get }
  var sizeHugeXXX: CGFloat { get }
  var sizeVeryHuge: CGFloat { get }
  var spacingNone: CGFloat { get }
  var spacingMicro: CGFloat { get }
  var spacingTiny: CGFloat { get }
  var spacingSmall: CGFloat { get }
  var spacingStandard: CGFloat { get }
  var spacingSemi: CGFloat { get }
  var spacingLarge: CGFloat { get }
  var spacingXLarge: CGFloat { get }
  var typographyFontFamilyPrimary: String { get }
  var typographyFontFamilySecondary: String { get }
  var typographyFontFamilyBranding: String { get }
  var typographyFontFamilyCode: String { get }
  var typographyLineHeightReset: CGFloat { get }
  var typographyLineHeightSmall: CGFloat { get }
  var typographyLineHeightMedium: CGFloat { get }
  var typographyLineHeightLarge: CGFloat { get }
  var typographyFontWeightRegular: UIFont.Weight { get }
  var typographyFontWeightMedium: UIFont.Weight { get }
}

protocol ComponentsProtocol {
  var buttonDefaultFontSize: CGFloat { get }
  var buttonDefaultFontWeight: UIFont.Weight { get }
  var buttonDefaultLetterSpacing: CGFloat { get }
  var buttonDefaultLineHeight: CGFloat { get }
  var heading1FontSize: CGFloat { get }
  var heading1FontWeight: UIFont.Weight { get }
  var heading1LetterSpacing: CGFloat { get }
  var heading2FontSize: CGFloat { get }
  var heading2FontWeight: UIFont.Weight { get }
  var heading2LetterSpacing: CGFloat { get }
  var heading3FontSize: CGFloat { get }
  var heading3FontWeight: UIFont.Weight { get }
  var heading3LetterSpacing: CGFloat { get }
  var heading4FontSize: CGFloat { get }
  var heading4FontWeight: UIFont.Weight { get }
  var heading4LetterSpacing: CGFloat { get }
  var heading5FontSize: CGFloat { get }
  var heading5FontWeight: UIFont.Weight { get }
  var heading5LetterSpacing: CGFloat { get }
  var heading6FontSize: CGFloat { get }
  var heading6FontWeight: UIFont.Weight { get }
  var heading6LetterSpacing: CGFloat { get }
  var subtitle1FontSize: CGFloat { get }
  var subtitle1FontWeight: UIFont.Weight { get }
  var subtitle1LetterSpacing: CGFloat { get }
  var subtitle2FontSize: CGFloat { get }
  var subtitle2FontWeight: UIFont.Weight { get }
  var subtitle2LetterSpacing: CGFloat { get }
  var body1FontSize: CGFloat { get }
  var body1FontWeight: UIFont.Weight { get }
  var body1LetterSpacing: CGFloat { get }
  var body2FontSize: CGFloat { get }
  var body2FontWeight: UIFont.Weight { get }
  var body2LetterSpacing: CGFloat { get }
  var captionFontSize: CGFloat { get }
  var captionFontWeight: UIFont.Weight { get }
  var captionLetterSpacing: CGFloat { get }
  var overlineFontSize: CGFloat { get }
  var overlineFontWeight: UIFont.Weight { get }
  var overlineLetterSpacing: CGFloat { get }
}
