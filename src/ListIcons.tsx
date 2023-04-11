
import { Box, Snackbar } from '@mui/material'
import ReactDOMServer from 'react-dom/server';
import { useState } from 'react'
import { Icon24Support } from './components/Icon/24Support'
import { Icon3dcube } from './components/Icon/3dcube'
import { Icon3dCubeScan } from './components/Icon/3dCubeScan'
import { Icon3dRotate } from './components/Icon/3dRotate'
import { Icon3dSquare } from './components/Icon/3dSquare'
import { Icon3square } from './components/Icon/3square'
import { IconActivity } from './components/Icon/activity'
import { IconAdd } from './components/Icon/add'
import { IconAddCircle } from './components/Icon/addCircle'
import { IconAdditem } from './components/Icon/additem'
import { IconAddSquare } from './components/Icon/addSquare'
import { IconAirdrop } from './components/Icon/airdrop'
import { IconAirplane } from './components/Icon/airplane'
import { IconAirplaneSquare } from './components/Icon/airplaneSquare'
import { IconAirpod } from './components/Icon/airpod'
import { IconAirpods } from './components/Icon/airpods'
import { IconAlarm } from './components/Icon/alarm'
import { IconAlignBottom } from './components/Icon/alignBottom'
import { IconAlignHorizontally } from './components/Icon/alignHorizontally'
import { IconAlignLeft } from './components/Icon/alignLeft'
import { IconAlignRight } from './components/Icon/alignRight'
import { IconAlignVertically } from './components/Icon/alignVertically'
import { IconAquarius } from './components/Icon/aquarius'
import { IconArchive } from './components/Icon/archive'
import { IconArchive1 } from './components/Icon/archive1'
import { IconArchive2 } from './components/Icon/archive2'
import { IconArchiveAdd } from './components/Icon/archiveAdd'
import { IconArchiveBook } from './components/Icon/archiveBook'
import { IconArchiveMinus } from './components/Icon/archiveMinus'
import { IconArchiveSlash } from './components/Icon/archiveSlash'
import { IconArchiveTick } from './components/Icon/archiveTick'
import { IconArrangeCircle } from './components/Icon/arrangeCircle'
import { IconArrangeCircle2 } from './components/Icon/arrangeCircle2'
import { IconArrangeSquare } from './components/Icon/arrangeSquare'
import { IconArrangeSquare2 } from './components/Icon/arrangeSquare2'
import { IconArrow } from './components/Icon/arrow'
import { IconArrow2 } from './components/Icon/arrow2'
import { IconArrow3 } from './components/Icon/arrow3'
import { IconArrowBottom } from './components/Icon/arrowBottom'
import { IconArrowCircleDown } from './components/Icon/arrowCircleDown'
import { IconArrowCircleLeft } from './components/Icon/arrowCircleLeft'
import { IconArrowCircleRight } from './components/Icon/arrowCircleRight'
import { IconArrowCircleUp } from './components/Icon/arrowCircleUp'
import { IconArrowDown } from './components/Icon/arrowDown'
import { IconArrowDown1 } from './components/Icon/arrowDown1'
import { IconArrowDown2 } from './components/Icon/arrowDown2'
import { IconArrowLeft } from './components/Icon/arrowLeft'
import { IconArrowLeft1 } from './components/Icon/arrowLeft1'
import { IconArrowLeft2 } from './components/Icon/arrowLeft2'
import { IconArrowLeft3 } from './components/Icon/arrowLeft3'
import { IconArrowRight } from './components/Icon/arrowRight'
import { IconArrowRight1 } from './components/Icon/arrowRight1'
import { IconArrowRight2 } from './components/Icon/arrowRight2'
import { IconArrowRight3 } from './components/Icon/arrowRight3'
import { IconArrowRight4 } from './components/Icon/arrowRight4'
import { IconArrowSquare } from './components/Icon/arrowSquare'
import { IconArrowSquareDown } from './components/Icon/arrowSquareDown'
import { IconArrowSquareLeft } from './components/Icon/arrowSquareLeft'
import { IconArrowSquareUp } from './components/Icon/arrowSquareUp'
import { IconArrowSwap } from './components/Icon/arrowSwap'
import { IconArrowSwapHorizontal } from './components/Icon/arrowSwapHorizontal'
import { IconArrowUp } from './components/Icon/arrowUp'
import { IconArrowUp1 } from './components/Icon/arrowUp1'
import { IconArrowUp2 } from './components/Icon/arrowUp2'
import { IconArrowUp3 } from './components/Icon/arrowUp3'
import { IconAttachCircle } from './components/Icon/attachCircle'
import { IconAttachSquare } from './components/Icon/attachSquare'
import { IconAudioSquare } from './components/Icon/audioSquare'
import { IconAutobrightness } from './components/Icon/autobrightness'
import { IconAward } from './components/Icon/award'
import { IconBackSquare } from './components/Icon/backSquare'
import { IconBackward } from './components/Icon/backward'
import { IconBackward10Seconds } from './components/Icon/backward10Seconds'
import { IconBackward15Seconds } from './components/Icon/backward15Seconds'
import { IconBackward5Seconds } from './components/Icon/backward5Seconds'
import { IconBackwardItem } from './components/Icon/backwardItem'
import { IconBag } from './components/Icon/bag'
import { IconBag2 } from './components/Icon/bag2'
import { IconBagCross } from './components/Icon/bagCross'
import { IconBagCross1 } from './components/Icon/bagCross1'
import { IconBagHappy } from './components/Icon/bagHappy'
import { IconBagTick } from './components/Icon/bagTick'
import { IconBagTick2 } from './components/Icon/bagTick2'
import { IconBagTimer } from './components/Icon/bagTimer'
import { IconBank } from './components/Icon/bank'
import { IconBarcode } from './components/Icon/barcode'
import { IconBattery3full } from './components/Icon/battery3full'
import { IconBatteryCharging } from './components/Icon/batteryCharging'
import { IconBatteryDisable } from './components/Icon/batteryDisable'
import { IconBatteryEmpty } from './components/Icon/batteryEmpty'
import { IconBatteryEmpty1 } from './components/Icon/batteryEmpty1'
import { IconBatteryFull } from './components/Icon/batteryFull'
import { IconBezier } from './components/Icon/bezier'
import { IconBill } from './components/Icon/bill'
import { IconBitcoinCard } from './components/Icon/bitcoinCard'
import { IconBitcoinConvert } from './components/Icon/bitcoinConvert'
import { IconBitcoinRefresh } from './components/Icon/bitcoinRefresh'
import { IconBlend } from './components/Icon/blend'
import { IconBlend2 } from './components/Icon/blend2'
import { IconBluetooth } from './components/Icon/bluetooth'
import { IconBluetooth2 } from './components/Icon/bluetooth2'
import { IconBluetoothCircle } from './components/Icon/bluetoothCircle'
import { IconBluetoothRectangle } from './components/Icon/bluetoothRectangle'
import { IconBlur } from './components/Icon/blur'
import { IconBook } from './components/Icon/book'
import { IconBook1 } from './components/Icon/book1'
import { IconBookmark } from './components/Icon/bookmark'
import { IconBookmark2 } from './components/Icon/bookmark2'
import { IconBookSaved } from './components/Icon/bookSaved'
import { IconBookSquare } from './components/Icon/bookSquare'
import { IconBox } from './components/Icon/box'
import { IconBox1 } from './components/Icon/box1'
import { IconBox2 } from './components/Icon/box2'
import { IconBoxAdd } from './components/Icon/boxAdd'
import { IconBoxRemove } from './components/Icon/boxRemove'
import { IconBoxSearch } from './components/Icon/boxSearch'
import { IconBoxTick } from './components/Icon/boxTick'
import { IconBoxTime } from './components/Icon/boxTime'
import { IconBriefcase } from './components/Icon/briefcase'
import { IconBrifecaseCross } from './components/Icon/brifecaseCross'
import { IconBrifecaseTick } from './components/Icon/brifecaseTick'
import { IconBrifecaseTimer } from './components/Icon/brifecaseTimer'
import { IconBroom } from './components/Icon/broom'
import { IconBrush } from './components/Icon/brush'
import { IconBrush1 } from './components/Icon/brush1'
import { IconBrush2 } from './components/Icon/brush2'
import { IconBrush3 } from './components/Icon/brush3'
import { IconBrush4 } from './components/Icon/brush4'
import { IconBubble } from './components/Icon/bubble'
import { IconBucket } from './components/Icon/bucket'
import { IconBucketCircle } from './components/Icon/bucketCircle'
import { IconBucketSquare } from './components/Icon/bucketSquare'
import { IconBuilding } from './components/Icon/building'
import { IconBuilding3 } from './components/Icon/building3'
import { IconBuilding4 } from './components/Icon/building4'
import { IconBuildings } from './components/Icon/buildings'
import { IconBuildings2 } from './components/Icon/buildings2'
import { IconBuliding } from './components/Icon/buliding'
import { IconBus } from './components/Icon/bus'
import { IconBuyCrypto } from './components/Icon/buyCrypto'
import { IconCake } from './components/Icon/cake'
import { IconCalculator } from './components/Icon/calculator'
import { IconCalendar } from './components/Icon/calendar'
import { IconCalendar1 } from './components/Icon/calendar1'
import { IconCalendar2 } from './components/Icon/calendar2'
import { IconCalendarAdd } from './components/Icon/calendarAdd'
import { IconCalendarCircle } from './components/Icon/calendarCircle'
import { IconCalendarEdit } from './components/Icon/calendarEdit'
import { IconCalendarRemove } from './components/Icon/calendarRemove'
import { IconCalendarSearch } from './components/Icon/calendarSearch'
import { IconCalendarTick } from './components/Icon/calendarTick'
import { IconCall } from './components/Icon/call'
import { IconCallAdd } from './components/Icon/callAdd'
import { IconCallCalling } from './components/Icon/callCalling'
import { IconCallIncoming } from './components/Icon/callIncoming'
import { IconCallMinus } from './components/Icon/callMinus'
import { IconCallOutgoing } from './components/Icon/callOutgoing'
import { IconCallReceived } from './components/Icon/callReceived'
import { IconCallRemove } from './components/Icon/callRemove'
import { IconCallSlash } from './components/Icon/callSlash'
import { IconCamera } from './components/Icon/camera'
import { IconCameraSlash } from './components/Icon/cameraSlash'
import { IconCandle } from './components/Icon/candle'
import { IconCandle2 } from './components/Icon/candle2'
import { IconCar } from './components/Icon/car'
import { IconCard } from './components/Icon/card'
import { IconCardAdd } from './components/Icon/cardAdd'
import { IconCardCoin } from './components/Icon/cardCoin'
import { IconCardEdit } from './components/Icon/cardEdit'
import { IconCardPos } from './components/Icon/cardPos'
import { IconCardReceive } from './components/Icon/cardReceive'
import { IconCardRemove } from './components/Icon/cardRemove'
import { IconCardRemove1 } from './components/Icon/cardRemove1'
import { IconCards } from './components/Icon/cards'
import { IconCardSend } from './components/Icon/cardSend'
import { IconCardSlash } from './components/Icon/cardSlash'
import { IconCardTick } from './components/Icon/cardTick'
import { IconCardTick1 } from './components/Icon/cardTick1'
import { IconCategory } from './components/Icon/category'
import { IconCategory2 } from './components/Icon/category2'
import { IconCd } from './components/Icon/cd'
import { IconChart } from './components/Icon/chart'
import { IconChart1 } from './components/Icon/chart1'
import { IconChart2 } from './components/Icon/chart2'
import { IconChart21 } from './components/Icon/chart21'
import { IconChart3 } from './components/Icon/chart3'
import { IconChartFail } from './components/Icon/chartFail'
import { IconChartSquare } from './components/Icon/chartSquare'
import { IconChartSuccess } from './components/Icon/chartSuccess'
import { IconCheck } from './components/Icon/check'
import { IconChrome } from './components/Icon/chrome'
import { IconClipboard } from './components/Icon/clipboard'
import { IconClipboardClose } from './components/Icon/clipboardClose'
import { IconClipboardExport } from './components/Icon/clipboardExport'
import { IconClipboardImport } from './components/Icon/clipboardImport'
import { IconClipboardText } from './components/Icon/clipboardText'
import { IconClipboardTick } from './components/Icon/clipboardTick'
import { IconClock } from './components/Icon/clock'
import { IconClock1 } from './components/Icon/clock1'
import { IconCloseCircle } from './components/Icon/closeCircle'
import { IconCloseSquare } from './components/Icon/closeSquare'
import { IconCloud } from './components/Icon/cloud'
import { IconCloudAdd } from './components/Icon/cloudAdd'
import { IconCloudChange } from './components/Icon/cloudChange'
import { IconCloudConnection } from './components/Icon/cloudConnection'
import { IconCloudCross } from './components/Icon/cloudCross'
import { IconCloudDrizzle } from './components/Icon/cloudDrizzle'
import { IconCloudFog } from './components/Icon/cloudFog'
import { IconCloudLightning } from './components/Icon/cloudLightning'
import { IconCloudMinus } from './components/Icon/cloudMinus'
import { IconCloudNotif } from './components/Icon/cloudNotif'
import { IconCloudPlus } from './components/Icon/cloudPlus'
import { IconCloudRemove } from './components/Icon/cloudRemove'
import { IconCloudSnow } from './components/Icon/cloudSnow'
import { IconCloudSunny } from './components/Icon/cloudSunny'
import { IconCode } from './components/Icon/code'
import { IconCode1 } from './components/Icon/code1'
import { IconCodeCircle } from './components/Icon/codeCircle'
import { IconCoffee } from './components/Icon/coffee'
import { IconCoin } from './components/Icon/coin'
import { IconCoin1 } from './components/Icon/coin1'
import { IconColorfilter } from './components/Icon/colorfilter'
import { IconColorsSquare } from './components/Icon/colorsSquare'
import { IconColorSwatch } from './components/Icon/colorSwatch'
import { IconCommand } from './components/Icon/command'
import { IconCommandSquare } from './components/Icon/commandSquare'
import { IconComponent } from './components/Icon/component'
import { IconComputing } from './components/Icon/computing'
import { IconConvert } from './components/Icon/convert'
import { IconConvert3dCube } from './components/Icon/convert3dCube'
import { IconConvertCard } from './components/Icon/convertCard'
import { IconConvertshape } from './components/Icon/convertshape'
import { IconConvertshape2 } from './components/Icon/convertshape2'
import { IconCopy } from './components/Icon/copy'
import { IconCopyright } from './components/Icon/copyright'
import { IconCopySuccess } from './components/Icon/copySuccess'
import { IconCourthouse } from './components/Icon/courthouse'
import { IconCpu } from './components/Icon/cpu'
import { IconCpuCharge } from './components/Icon/cpuCharge'
import { IconCpuSetting } from './components/Icon/cpuSetting'
import { IconCreativeCommons } from './components/Icon/creativeCommons'
import { IconCrop } from './components/Icon/crop'
import { IconCrown } from './components/Icon/crown'
import { IconCrown1 } from './components/Icon/crown1'
import { IconCup } from './components/Icon/cup'
import { IconDanger } from './components/Icon/danger'
import { IconData } from './components/Icon/data'
import { IconData2 } from './components/Icon/data2'
import { IconDesigntools } from './components/Icon/designtools'
import { IconDeviceMessage } from './components/Icon/deviceMessage'
import { IconDevices } from './components/Icon/devices'
import { IconDevices1 } from './components/Icon/devices1'
import { IconDiagram } from './components/Icon/diagram'
import { IconDiamonds } from './components/Icon/diamonds'
import { IconDirect } from './components/Icon/direct'
import { IconDirectboxDefault } from './components/Icon/directboxDefault'
import { IconDirectboxNotif } from './components/Icon/directboxNotif'
import { IconDirectboxReceive } from './components/Icon/directboxReceive'
import { IconDirectboxSend } from './components/Icon/directboxSend'
import { IconDirectDown } from './components/Icon/directDown'
import { IconDirectInbox } from './components/Icon/directInbox'
import { IconDirectLeft } from './components/Icon/directLeft'
import { IconDirectNormal } from './components/Icon/directNormal'
import { IconDirectNotification } from './components/Icon/directNotification'
import { IconDirectRight } from './components/Icon/directRight'
import { IconDirectSend } from './components/Icon/directSend'
import { IconDirectUp } from './components/Icon/directUp'
import { IconDiscountCircle } from './components/Icon/discountCircle'
import { IconDiscountShape } from './components/Icon/discountShape'
import { IconDiscover } from './components/Icon/discover'
import { IconDiscover1 } from './components/Icon/discover1'
import { IconDislike } from './components/Icon/dislike'
import { IconDocument } from './components/Icon/document'
import { IconDocument1 } from './components/Icon/document1'
import { IconDocumentCloud } from './components/Icon/documentCloud'
import { IconDocumentCode } from './components/Icon/documentCode'
import { IconDocumentCode2 } from './components/Icon/documentCode2'
import { IconDocumentCopy } from './components/Icon/documentCopy'
import { IconDocumentDownload } from './components/Icon/documentDownload'
import { IconDocumentFavorite } from './components/Icon/documentFavorite'
import { IconDocumentFilter } from './components/Icon/documentFilter'
import { IconDocumentForward } from './components/Icon/documentForward'
import { IconDocumentLike } from './components/Icon/documentLike'
import { IconDocumentNormal } from './components/Icon/documentNormal'
import { IconDocumentPrevious } from './components/Icon/documentPrevious'
import { IconDocumentSketch } from './components/Icon/documentSketch'
import { IconDocumentText } from './components/Icon/documentText'
import { IconDocumentText1 } from './components/Icon/documentText1'
import { IconDocumentUpload } from './components/Icon/documentUpload'
import { IconDollarCircle } from './components/Icon/dollarCircle'
import { IconDollarSquare } from './components/Icon/dollarSquare'
import { IconDriver } from './components/Icon/driver'
import { IconDriver2 } from './components/Icon/driver2'
import { IconDriverRefresh } from './components/Icon/driverRefresh'
import { IconDriving } from './components/Icon/driving'
import { IconEdit } from './components/Icon/edit'
import { IconEdit2 } from './components/Icon/edit2'
import { IconElectricity } from './components/Icon/electricity'
import { IconElement2 } from './components/Icon/element2'
import { IconElement3 } from './components/Icon/element3'
import { IconElement4 } from './components/Icon/element4'
import { IconElementEqual } from './components/Icon/elementEqual'
import { IconElementPlus } from './components/Icon/elementPlus'
import { IconEmojiHappy } from './components/Icon/emojiHappy'
import { IconEmojiNormal } from './components/Icon/emojiNormal'
import { IconEmojiSad } from './components/Icon/emojiSad'
import { IconEmptyWallet } from './components/Icon/emptyWallet'
import { IconEmptyWalletAdd } from './components/Icon/emptyWalletAdd'
import { IconEmptyWalletChange } from './components/Icon/emptyWalletChange'
import { IconEmptyWalletRemove } from './components/Icon/emptyWalletRemove'
import { IconEmptyWalletTick } from './components/Icon/emptyWalletTick'
import { IconEmptyWalletTime } from './components/Icon/emptyWalletTime'
import { IconEraser } from './components/Icon/eraser'
import { IconEraser1 } from './components/Icon/eraser1'
import { IconExport } from './components/Icon/export'
import { IconExport1 } from './components/Icon/export1'
import { IconExport2 } from './components/Icon/export2'
import { IconExport3 } from './components/Icon/export3'
import { IconExternalDrive } from './components/Icon/externalDrive'
import { IconEye } from './components/Icon/eye'
import { IconEyeSlash } from './components/Icon/eyeSlash'
import { IconFatrows } from './components/Icon/fatrows'
import { IconFavoriteChart } from './components/Icon/favoriteChart'
import { IconFilter } from './components/Icon/filter'
import { IconFilterAdd } from './components/Icon/filterAdd'
import { IconFilterEdit } from './components/Icon/filterEdit'
import { IconFilterRemove } from './components/Icon/filterRemove'
import { IconFilterSearch } from './components/Icon/filterSearch'
import { IconFilterSquare } from './components/Icon/filterSquare'
import { IconFilterTick } from './components/Icon/filterTick'
import { IconFingerCricle } from './components/Icon/fingerCricle'
import { IconFingerScan } from './components/Icon/fingerScan'
import { IconFirstline } from './components/Icon/firstline'
import { IconFlag } from './components/Icon/flag'
import { IconFlag2 } from './components/Icon/flag2'
import { IconFlash } from './components/Icon/flash'
import { IconFlash1 } from './components/Icon/flash1'
import { IconFlashCircle } from './components/Icon/flashCircle'
import { IconFlashCircle1 } from './components/Icon/flashCircle1'
import { IconFlashSlash } from './components/Icon/flashSlash'
import { IconFolder } from './components/Icon/folder'
import { IconFolder2 } from './components/Icon/folder2'
import { IconFolderAdd } from './components/Icon/folderAdd'
import { IconFolderCloud } from './components/Icon/folderCloud'
import { IconFolderConnection } from './components/Icon/folderConnection'
import { IconFolderCross } from './components/Icon/folderCross'
import { IconFolderFavorite } from './components/Icon/folderFavorite'
import { IconFolderMinus } from './components/Icon/folderMinus'
import { IconFolderOpen } from './components/Icon/folderOpen'
import { IconForbidden } from './components/Icon/forbidden'
import { IconForbidden2 } from './components/Icon/forbidden2'
import { IconFormatCircle } from './components/Icon/formatCircle'
import { IconFormatSquare } from './components/Icon/formatSquare'
import { IconForward } from './components/Icon/forward'
import { IconForward10Seconds } from './components/Icon/forward10Seconds'
import { IconForward15Seconds } from './components/Icon/forward15Seconds'
import { IconForward5Seconds } from './components/Icon/forward5Seconds'
import { IconForwardItem } from './components/Icon/forwardItem'
import { IconForwardSquare } from './components/Icon/forwardSquare'
import { IconFrame } from './components/Icon/frame'
import { IconFrame1 } from './components/Icon/frame1'
import { IconFrame2 } from './components/Icon/frame2'
import { IconFrame3 } from './components/Icon/frame3'
import { IconFrame4 } from './components/Icon/frame4'
import { IconGallery } from './components/Icon/gallery'
import { IconGalleryAdd } from './components/Icon/galleryAdd'
import { IconGalleryEdit } from './components/Icon/galleryEdit'
import { IconGalleryExport } from './components/Icon/galleryExport'
import { IconGalleryFavorite } from './components/Icon/galleryFavorite'
import { IconGalleryImport } from './components/Icon/galleryImport'
import { IconGalleryRemove } from './components/Icon/galleryRemove'
import { IconGallerySlash } from './components/Icon/gallerySlash'
import { IconGalleryTick } from './components/Icon/galleryTick'
import { IconGame } from './components/Icon/game'
import { IconGameboy } from './components/Icon/gameboy'
import { IconGasStation } from './components/Icon/gasStation'
import { IconGemini } from './components/Icon/gemini'
import { IconGemini2 } from './components/Icon/gemini2'
import { IconGhost } from './components/Icon/ghost'
import { IconGift } from './components/Icon/gift'
import { IconGlass } from './components/Icon/glass'
import { IconGlass1 } from './components/Icon/glass1'
import { IconGlobal } from './components/Icon/global'
import { IconGlobalEdit } from './components/Icon/globalEdit'
import { IconGlobalRefresh } from './components/Icon/globalRefresh'
import { IconGlobalSearch } from './components/Icon/globalSearch'
import { IconGps } from './components/Icon/gps'
import { IconGpsSlash } from './components/Icon/gpsSlash'
import { IconGrammerly } from './components/Icon/grammerly'
import { IconGraph } from './components/Icon/graph'
import { IconGrid1 } from './components/Icon/grid1'
import { IconGrid2 } from './components/Icon/grid2'
import { IconGrid3 } from './components/Icon/grid3'
import { IconGrid4 } from './components/Icon/grid4'
import { IconGrid5 } from './components/Icon/grid5'
import { IconGrid6 } from './components/Icon/grid6'
import { IconGrid7 } from './components/Icon/grid7'
import { IconGrid8 } from './components/Icon/grid8'
import { IconGrid9 } from './components/Icon/grid9'
import { IconGridEdit } from './components/Icon/gridEdit'
import { IconGridEraser } from './components/Icon/gridEraser'
import { IconGridLock } from './components/Icon/gridLock'
import { IconHappyemoji } from './components/Icon/happyemoji'
import { IconHashtag } from './components/Icon/hashtag'
import { IconHashtag1 } from './components/Icon/hashtag1'
import { IconHashtagDown } from './components/Icon/hashtagDown'
import { IconHashtagUp } from './components/Icon/hashtagUp'
import { IconHeadphone } from './components/Icon/headphone'
import { IconHeadphones } from './components/Icon/headphones'
import { IconHealth } from './components/Icon/health'
import { IconHeart } from './components/Icon/heart'
import { IconHeartAdd } from './components/Icon/heartAdd'
import { IconHeartCircle } from './components/Icon/heartCircle'
import { IconHeartEdit } from './components/Icon/heartEdit'
import { IconHeartRemove } from './components/Icon/heartRemove'
import { IconHeartSearch } from './components/Icon/heartSearch'
import { IconHeartSlash } from './components/Icon/heartSlash'
import { IconHeartTick } from './components/Icon/heartTick'
import { IconHierarchy } from './components/Icon/hierarchy'
import { IconHierarchy2 } from './components/Icon/hierarchy2'
import { IconHierarchy3 } from './components/Icon/hierarchy3'
import { IconHierarchySquare } from './components/Icon/hierarchySquare'
import { IconHierarchySquare2 } from './components/Icon/hierarchySquare2'
import { IconHierarchySquare3 } from './components/Icon/hierarchySquare3'
import { IconHome } from './components/Icon/home'
import { IconHome1 } from './components/Icon/home1'
import { IconHome2 } from './components/Icon/home2'
import { IconHomeHashtag } from './components/Icon/homeHashtag'
import { IconHomeTrendDown } from './components/Icon/homeTrendDown'
import { IconHomeTrendUp } from './components/Icon/homeTrendUp'
import { IconHomeWifi } from './components/Icon/homeWifi'
import { IconHospital } from './components/Icon/hospital'
import { IconHouse } from './components/Icon/house'
import { IconHouse2 } from './components/Icon/house2'
import { IconIcon } from './components/Icon/icon'
import { IconImage } from './components/Icon/image'
import { IconImport } from './components/Icon/import'
import { IconImport1 } from './components/Icon/import1'
import { IconImport2 } from './components/Icon/import2'
import { IconInfoCircle } from './components/Icon/infoCircle'
import { IconInformation } from './components/Icon/information'
import { IconInstagram } from './components/Icon/instagram'
import { IconJudge } from './components/Icon/judge'
import { IconKanban } from './components/Icon/kanban'
import { IconKey } from './components/Icon/key'
import { IconKeyboard } from './components/Icon/keyboard'
import { IconKeyboardOpen } from './components/Icon/keyboardOpen'
import { IconKeySquare } from './components/Icon/keySquare'
import { IconLamp } from './components/Icon/lamp'
import { IconLamp1 } from './components/Icon/lamp1'
import { IconLampCharge } from './components/Icon/lampCharge'
import { IconLampOn } from './components/Icon/lampOn'
import { IconLampSlash } from './components/Icon/lampSlash'
import { IconLanguageCircle } from './components/Icon/languageCircle'
import { IconLanguageSquare } from './components/Icon/languageSquare'
import { IconLayer } from './components/Icon/layer'
import { IconLevel } from './components/Icon/level'
import { IconLifebuoy } from './components/Icon/lifebuoy'
import { IconLike } from './components/Icon/like'
import { IconLike1 } from './components/Icon/like1'
import { IconLikeDislike } from './components/Icon/likeDislike'
import { IconLikeShapes } from './components/Icon/likeShapes'
import { IconLikeTag } from './components/Icon/likeTag'
import { IconLink } from './components/Icon/link'
import { IconLink1 } from './components/Icon/link1'
import { IconLink2 } from './components/Icon/link2'
import { IconLink21 } from './components/Icon/link21'
import { IconLinkCircle } from './components/Icon/linkCircle'
import { IconLinkSquare } from './components/Icon/linkSquare'
import { IconLocation } from './components/Icon/location'
import { IconLocationAdd } from './components/Icon/locationAdd'
import { IconLocationCross } from './components/Icon/locationCross'
import { IconLocationMinus } from './components/Icon/locationMinus'
import { IconLocationSlash } from './components/Icon/locationSlash'
import { IconLocationTick } from './components/Icon/locationTick'
import { IconLock } from './components/Icon/lock'
import { IconLock1 } from './components/Icon/lock1'
import { IconLockCircle } from './components/Icon/lockCircle'
import { IconLockSlash } from './components/Icon/lockSlash'
import { IconLogin } from './components/Icon/login'
import { IconLogin1 } from './components/Icon/login1'
import { IconLogout } from './components/Icon/logout'
import { IconLogout1 } from './components/Icon/logout1'
import { IconLovely } from './components/Icon/lovely'
import { IconMagicpen } from './components/Icon/magicpen'
import { IconMagicStar } from './components/Icon/magicStar'
import { IconMainComponent } from './components/Icon/mainComponent'
import { IconMan } from './components/Icon/man'
import { IconMap } from './components/Icon/map'
import { IconMap1 } from './components/Icon/map1'
import { IconMask } from './components/Icon/mask'
import { IconMask1 } from './components/Icon/mask1'
import { IconMask2 } from './components/Icon/mask2'
import { IconMath } from './components/Icon/math'
import { IconMaximize } from './components/Icon/maximize'
import { IconMaximize1 } from './components/Icon/maximize1'
import { IconMaximize2 } from './components/Icon/maximize2'
import { IconMaximize21 } from './components/Icon/maximize21'
import { IconMaximize3 } from './components/Icon/maximize3'
import { IconMaximize4 } from './components/Icon/maximize4'
import { IconMaximizeCircle } from './components/Icon/maximizeCircle'
import { IconMedal } from './components/Icon/medal'
import { IconMedalStar } from './components/Icon/medalStar'
import { IconMenu } from './components/Icon/menu'
import { IconMenu1 } from './components/Icon/menu1'
import { IconMenuBoard } from './components/Icon/menuBoard'
import { IconMessage } from './components/Icon/message'
import { IconMessage2 } from './components/Icon/message2'
import { IconMessageAdd } from './components/Icon/messageAdd'
import { IconMessageAdd1 } from './components/Icon/messageAdd1'
import { IconMessageCircle } from './components/Icon/messageCircle'
import { IconMessageEdit } from './components/Icon/messageEdit'
import { IconMessageFavorite } from './components/Icon/messageFavorite'
import { IconMessageMinus } from './components/Icon/messageMinus'
import { IconMessageNotif } from './components/Icon/messageNotif'
import { IconMessageProgramming } from './components/Icon/messageProgramming'
import { IconMessageQuestion } from './components/Icon/messageQuestion'
import { IconMessageRemove } from './components/Icon/messageRemove'
import { IconMessages } from './components/Icon/messages'
import { IconMessages1 } from './components/Icon/messages1'
import { IconMessages2 } from './components/Icon/messages2'
import { IconMessages3 } from './components/Icon/messages3'
import { IconMessageSearch } from './components/Icon/messageSearch'
import { IconMessageSquare } from './components/Icon/messageSquare'
import { IconMessageText } from './components/Icon/messageText'
import { IconMessageText1 } from './components/Icon/messageText1'
import { IconMessageTick } from './components/Icon/messageTick'
import { IconMessageTime } from './components/Icon/messageTime'
import { IconMicrophone } from './components/Icon/microphone'
import { IconMicrophone2 } from './components/Icon/microphone2'
import { IconMicrophoneSlash } from './components/Icon/microphoneSlash'
import { IconMicrophoneSlash1 } from './components/Icon/microphoneSlash1'
import { IconMicroscope } from './components/Icon/microscope'
import { IconMilk } from './components/Icon/milk'
import { IconMiniMusicSqaure } from './components/Icon/miniMusicSqaure'
import { IconMinus } from './components/Icon/minus'
import { IconMinusCirlce } from './components/Icon/minusCirlce'
import { IconMinusSquare } from './components/Icon/minusSquare'
import { IconMirror } from './components/Icon/mirror'
import { IconMirroringScreen } from './components/Icon/mirroringScreen'
import { IconMobile } from './components/Icon/mobile'
import { IconMobileProgramming } from './components/Icon/mobileProgramming'
import { IconMoney } from './components/Icon/money'
import { IconMoney2 } from './components/Icon/money2'
import { IconMoney3 } from './components/Icon/money3'
import { IconMoney4 } from './components/Icon/money4'
import { IconMoneyAdd } from './components/Icon/moneyAdd'
import { IconMoneyChange } from './components/Icon/moneyChange'
import { IconMoneyForbidden } from './components/Icon/moneyForbidden'
import { IconMoneyRecive } from './components/Icon/moneyRecive'
import { IconMoneyRemove } from './components/Icon/moneyRemove'
import { IconMoneys } from './components/Icon/moneys'
import { IconMoneySend } from './components/Icon/moneySend'
import { IconMoneyTick } from './components/Icon/moneyTick'
import { IconMoneyTime } from './components/Icon/moneyTime'
import { IconMonitor } from './components/Icon/monitor'
import { IconMonitorMobbile } from './components/Icon/monitorMobbile'
import { IconMonitorRecorder } from './components/Icon/monitorRecorder'
import { IconMoon } from './components/Icon/moon'
import { IconMore } from './components/Icon/more'
import { IconMore2 } from './components/Icon/more2'
import { IconMoreCircle } from './components/Icon/moreCircle'
import { IconMoreSquare } from './components/Icon/moreSquare'
import { IconMouse } from './components/Icon/mouse'
import { IconMouse1 } from './components/Icon/mouse1'
import { IconMouseCircle } from './components/Icon/mouseCircle'
import { IconMouseSquare } from './components/Icon/mouseSquare'
import { IconMusic } from './components/Icon/music'
import { IconMusicCircle } from './components/Icon/musicCircle'
import { IconMusicDashboard } from './components/Icon/musicDashboard'
import { IconMusicFilter } from './components/Icon/musicFilter'
import { IconMusicLibrary2 } from './components/Icon/musicLibrary2'
import { IconMusicnote } from './components/Icon/musicnote'
import { IconMusicPlay } from './components/Icon/musicPlay'
import { IconMusicPlaylist } from './components/Icon/musicPlaylist'
import { IconMusicSquare } from './components/Icon/musicSquare'
import { IconMusicSquareAdd } from './components/Icon/musicSquareAdd'
import { IconMusicSquareRemove } from './components/Icon/musicSquareRemove'
import { IconMusicSquareSearch } from './components/Icon/musicSquareSearch'
import { IconNext } from './components/Icon/next'
import { IconNote } from './components/Icon/note'
import { IconNote1 } from './components/Icon/note1'
import { IconNote2 } from './components/Icon/note2'
import { IconNote21 } from './components/Icon/note21'
import { IconNoteAdd } from './components/Icon/noteAdd'
import { IconNoteFavorite } from './components/Icon/noteFavorite'
import { IconNoteRemove } from './components/Icon/noteRemove'
import { IconNoteSquare } from './components/Icon/noteSquare'
import { IconNoteText } from './components/Icon/noteText'
import { IconNotification } from './components/Icon/notification'
import { IconNotification1 } from './components/Icon/notification1'
import { IconNotificationBing } from './components/Icon/notificationBing'
import { IconNotificationCircle } from './components/Icon/notificationCircle'
import { IconNotificationFavorite } from './components/Icon/notificationFavorite'
import { IconNotificationStatus } from './components/Icon/notificationStatus'
import { IconOmegaCircle } from './components/Icon/omegaCircle'
import { IconOmegaSquare } from './components/Icon/omegaSquare'
import { IconPaintbucket } from './components/Icon/paintbucket'
import { IconPaperclip } from './components/Icon/paperclip'
import { IconPaperclip2 } from './components/Icon/paperclip2'
import { IconPasswordCheck } from './components/Icon/passwordCheck'
import { IconPath } from './components/Icon/path'
import { IconPath2 } from './components/Icon/path2'
import { IconPathSquare } from './components/Icon/pathSquare'
import { IconPause } from './components/Icon/pause'
import { IconPauseCircle } from './components/Icon/pauseCircle'
import { IconPenAdd } from './components/Icon/penAdd'
import { IconPenClose } from './components/Icon/penClose'
import { IconPenRemove } from './components/Icon/penRemove'
import { IconPenTool } from './components/Icon/penTool'
import { IconPenTool2 } from './components/Icon/penTool2'
import { IconPeople } from './components/Icon/people'
import { IconPercentageCircle } from './components/Icon/percentageCircle'
import { IconPercentageSquare } from './components/Icon/percentageSquare'
import { IconPersonalcard } from './components/Icon/personalcard'
import { IconPet } from './components/Icon/pet'
import { IconPharagraphspacing } from './components/Icon/pharagraphspacing'
import { IconPictureFrame } from './components/Icon/pictureFrame'
import { IconPlay } from './components/Icon/play'
import { IconPlayAdd } from './components/Icon/playAdd'
import { IconPlayCircle } from './components/Icon/playCircle'
import { IconPlayCricle } from './components/Icon/playCricle'
import { IconPlayRemove } from './components/Icon/playRemove'
import { IconPresentionChart } from './components/Icon/presentionChart'
import { IconPrevious } from './components/Icon/previous'
import { IconPrinter } from './components/Icon/printer'
import { IconPrinterSlash } from './components/Icon/printerSlash'
import { IconProfile2user } from './components/Icon/profile2user'
import { IconProfileAdd } from './components/Icon/profileAdd'
import { IconProfileCircle } from './components/Icon/profileCircle'
import { IconProfileDelete } from './components/Icon/profileDelete'
import { IconProfileRemove } from './components/Icon/profileRemove'
import { IconProfileTick } from './components/Icon/profileTick'
import { IconProgrammingArrow } from './components/Icon/programmingArrow'
import { IconProgrammingArrows } from './components/Icon/programmingArrows'
import { IconQuoteDown } from './components/Icon/quoteDown'
import { IconQuoteDownCircle } from './components/Icon/quoteDownCircle'
import { IconQuoteDownSquare } from './components/Icon/quoteDownSquare'
import { IconQuoteUp } from './components/Icon/quoteUp'
import { IconQuoteUpCircle } from './components/Icon/quoteUpCircle'
import { IconQuoteUpSquare } from './components/Icon/quoteUpSquare'
import { IconRadar } from './components/Icon/radar'
import { IconRadar1 } from './components/Icon/radar1'
import { IconRadar2 } from './components/Icon/radar2'
import { IconRadio } from './components/Icon/radio'
import { IconRam } from './components/Icon/ram'
import { IconRam2 } from './components/Icon/ram2'
import { IconRanking } from './components/Icon/ranking'
import { IconRanking1 } from './components/Icon/ranking1'
import { IconReceipt } from './components/Icon/receipt'
import { IconReceipt1 } from './components/Icon/receipt1'
import { IconReceipt2 } from './components/Icon/receipt2'
import { IconReceipt21 } from './components/Icon/receipt21'
import { IconReceiptAdd } from './components/Icon/receiptAdd'
import { IconReceiptDiscount } from './components/Icon/receiptDiscount'
import { IconReceiptDisscount } from './components/Icon/receiptDisscount'
import { IconReceiptEdit } from './components/Icon/receiptEdit'
import { IconReceiptItem } from './components/Icon/receiptItem'
import { IconReceiptMinus } from './components/Icon/receiptMinus'
import { IconReceiptSearch } from './components/Icon/receiptSearch'
import { IconReceiptSquare } from './components/Icon/receiptSquare'
import { IconReceiptText } from './components/Icon/receiptText'
import { IconReceived } from './components/Icon/received'
import { IconReceiveSquare } from './components/Icon/receiveSquare'
import { IconReceiveSquare2 } from './components/Icon/receiveSquare2'
import { IconRecord } from './components/Icon/record'
import { IconRecordCircle } from './components/Icon/recordCircle'
import { IconRecoveryConvert } from './components/Icon/recoveryConvert'
import { IconRedo } from './components/Icon/redo'
import { IconRefresh } from './components/Icon/refresh'
import { IconRefresh2 } from './components/Icon/refresh2'
import { IconRefreshCircle } from './components/Icon/refreshCircle'
import { IconRefreshLeftSquare } from './components/Icon/refreshLeftSquare'
import { IconRefreshRightSquare } from './components/Icon/refreshRightSquare'
import { IconRefreshSquare2 } from './components/Icon/refreshSquare2'
import { IconRepeat } from './components/Icon/repeat'
import { IconRepeatCircle } from './components/Icon/repeatCircle'
import { IconRepeateMusic } from './components/Icon/repeateMusic'
import { IconRepeateOne } from './components/Icon/repeateOne'
import { IconReserve } from './components/Icon/reserve'
import { IconRotateLeft } from './components/Icon/rotateLeft'
import { IconRotateLeft1 } from './components/Icon/rotateLeft1'
import { IconRotateRight } from './components/Icon/rotateRight'
import { IconRotateRight1 } from './components/Icon/rotateRight1'
import { IconRouteSquare } from './components/Icon/routeSquare'
import { IconRouting } from './components/Icon/routing'
import { IconRouting2 } from './components/Icon/routing2'
import { IconRowHorizontal } from './components/Icon/rowHorizontal'
import { IconRowVertical } from './components/Icon/rowVertical'
import { IconRuler } from './components/Icon/ruler'
import { IconRulerPen } from './components/Icon/rulerPen'
import { IconSafeHome } from './components/Icon/safeHome'
import { IconSagittarius } from './components/Icon/sagittarius'
import { IconSave2 } from './components/Icon/save2'
import { IconSaveAdd } from './components/Icon/saveAdd'
import { IconSaveMinus } from './components/Icon/saveMinus'
import { IconSaveRemove } from './components/Icon/saveRemove'
import { IconScan } from './components/Icon/scan'
import { IconScanBarcode } from './components/Icon/scanBarcode'
import { IconScanner } from './components/Icon/scanner'
import { IconScanning } from './components/Icon/scanning'
import { IconScissor } from './components/Icon/scissor'
import { IconScissor1 } from './components/Icon/scissor1'
import { IconScreenmirroring } from './components/Icon/screenmirroring'
import { IconScroll } from './components/Icon/scroll'
import { IconSearchFavorite } from './components/Icon/searchFavorite'
import { IconSearchFavorite1 } from './components/Icon/searchFavorite1'
import { IconSearchNormal } from './components/Icon/searchNormal'
import { IconSearchNormal1 } from './components/Icon/searchNormal1'
import { IconSearchStatus } from './components/Icon/searchStatus'
import { IconSearchStatus1 } from './components/Icon/searchStatus1'
import { IconSearchZoomIn } from './components/Icon/searchZoomIn'
import { IconSearchZoomIn1 } from './components/Icon/searchZoomIn1'
import { IconSearchZoomOut } from './components/Icon/searchZoomOut'
import { IconSearchZoomOut1 } from './components/Icon/searchZoomOut1'
import { IconSecurity } from './components/Icon/security'
import { IconSecurityCard } from './components/Icon/securityCard'
import { IconSecuritySafe } from './components/Icon/securitySafe'
import { IconSecurityTime } from './components/Icon/securityTime'
import { IconSecurityUser } from './components/Icon/securityUser'
import { IconSend } from './components/Icon/send'
import { IconSend1 } from './components/Icon/send1'
import { IconSend2 } from './components/Icon/send2'
import { IconSendSqaure2 } from './components/Icon/sendSqaure2'
import { IconSendSquare } from './components/Icon/sendSquare'
import { IconSetting } from './components/Icon/setting'
import { IconSetting2 } from './components/Icon/setting2'
import { IconSetting3 } from './components/Icon/setting3'
import { IconSetting4 } from './components/Icon/setting4'
import { IconSetting5 } from './components/Icon/setting5'
import { IconSettings } from './components/Icon/settings'
import { IconShapes } from './components/Icon/shapes'
import { IconShapes1 } from './components/Icon/shapes1'
import { IconShare } from './components/Icon/share'
import { IconShield } from './components/Icon/shield'
import { IconShieldCross } from './components/Icon/shieldCross'
import { IconShieldSearch } from './components/Icon/shieldSearch'
import { IconShieldSlash } from './components/Icon/shieldSlash'
import { IconShieldTick } from './components/Icon/shieldTick'
import { IconShip } from './components/Icon/ship'
import { IconShop } from './components/Icon/shop'
import { IconShopAdd } from './components/Icon/shopAdd'
import { IconShoppingBag } from './components/Icon/shoppingBag'
import { IconShoppingCart } from './components/Icon/shoppingCart'
import { IconShopRemove } from './components/Icon/shopRemove'
import { IconShuffle } from './components/Icon/shuffle'
import { IconSidebarBottom } from './components/Icon/sidebarBottom'
import { IconSidebarLeft } from './components/Icon/sidebarLeft'
import { IconSidebarRight } from './components/Icon/sidebarRight'
import { IconSidebarTop } from './components/Icon/sidebarTop'
import { IconSignpost } from './components/Icon/signpost'
import { IconSimcard } from './components/Icon/simcard'
import { IconSimcard1 } from './components/Icon/simcard1'
import { IconSimcard2 } from './components/Icon/simcard2'
import { IconSize } from './components/Icon/size'
import { IconSlash } from './components/Icon/slash'
import { IconSlider } from './components/Icon/slider'
import { IconSliderHorizontal } from './components/Icon/sliderHorizontal'
import { IconSliderHorizontal1 } from './components/Icon/sliderHorizontal1'
import { IconSliderVertical } from './components/Icon/sliderVertical'
import { IconSliderVertical1 } from './components/Icon/sliderVertical1'
import { IconSmallcaps } from './components/Icon/smallcaps'
import { IconSmartCar } from './components/Icon/smartCar'
import { IconSmartHome } from './components/Icon/smartHome'
import { IconSmileys } from './components/Icon/smileys'
import { IconSms } from './components/Icon/sms'
import { IconSmsEdit } from './components/Icon/smsEdit'
import { IconSmsNotification } from './components/Icon/smsNotification'
import { IconSmsSearch } from './components/Icon/smsSearch'
import { IconSmsStar } from './components/Icon/smsStar'
import { IconSmsTracking } from './components/Icon/smsTracking'
import { IconSort } from './components/Icon/sort'
import { IconSound } from './components/Icon/sound'
import { IconSpeaker } from './components/Icon/speaker'
import { IconSpeedometer } from './components/Icon/speedometer'
import { IconStar } from './components/Icon/star'
import { IconStar1 } from './components/Icon/star1'
import { IconStarSlash } from './components/Icon/starSlash'
import { IconStatus } from './components/Icon/status'
import { IconStatusUp } from './components/Icon/statusUp'
import { IconSticker } from './components/Icon/sticker'
import { IconStickynote } from './components/Icon/stickynote'
import { IconStop } from './components/Icon/stop'
import { IconStopCircle } from './components/Icon/stopCircle'
import { IconStory } from './components/Icon/story'
import { IconStrongbox } from './components/Icon/strongbox'
import { IconStrongbox2 } from './components/Icon/strongbox2'
import { IconSubtitle } from './components/Icon/subtitle'
import { IconSun } from './components/Icon/sun'
import { IconSun1 } from './components/Icon/sun1'
import { IconSunFog } from './components/Icon/sunFog'
import { IconTag } from './components/Icon/tag'
import { IconTag2 } from './components/Icon/tag2'
import { IconTagCross } from './components/Icon/tagCross'
import { TagPercent } from './components/Icon/tagPercent'
import { IconTagRight } from './components/Icon/tagRight'
import { IconTagUser } from './components/Icon/tagUser'
import { IconTask } from './components/Icon/task'
import { IconTaskSquare } from './components/Icon/taskSquare'
import { IconTeacher } from './components/Icon/teacher'
import { IconText } from './components/Icon/text'
import { IconTextalignCenter } from './components/Icon/textalignCenter'
import { IconTextalignJustifycenter } from './components/Icon/textalignJustifycenter'
import { IconTextalignJustifyleft } from './components/Icon/textalignJustifyleft'
import { IconTextalignJustifyright } from './components/Icon/textalignJustifyright'
import { IconTextalignLeft } from './components/Icon/textalignLeft'
import { IconTextalignRight } from './components/Icon/textalignRight'
import { IconTextBlock } from './components/Icon/textBlock'
import { IconTextBold } from './components/Icon/textBold'
import { IconTextItalic } from './components/Icon/textItalic'
import { IconTextUnderline } from './components/Icon/textUnderline'
import { IconTickCircle } from './components/Icon/tickCircle'
import { IconTicket } from './components/Icon/ticket'
import { IconTicket2 } from './components/Icon/ticket2'
import { IconTicketDiscount } from './components/Icon/ticketDiscount'
import { IconTicketExpired } from './components/Icon/ticketExpired'
import { IconTicketStar } from './components/Icon/ticketStar'
import { IconTickSquare } from './components/Icon/tickSquare'
import { IconTimer } from './components/Icon/timer'
import { IconTimer1 } from './components/Icon/timer1'
import { IconTimerPause } from './components/Icon/timerPause'
import { IconTimerStart } from './components/Icon/timerStart'
import { IconToggleOff } from './components/Icon/toggleOff'
import { IconToggleOffCircle } from './components/Icon/toggleOffCircle'
import { IconToggleOn } from './components/Icon/toggleOn'
import { IconToggleOnCircle } from './components/Icon/toggleOnCircle'
import { IconTrade } from './components/Icon/trade'
import { IconTransactionMinus } from './components/Icon/transactionMinus'
import { IconTranslate } from './components/Icon/translate'
import { IconTrash } from './components/Icon/trash'
import { IconTree } from './components/Icon/tree'
import { IconTrendDown } from './components/Icon/trendDown'
import { IconTrendUp } from './components/Icon/trendUp'
import { IconTriangle } from './components/Icon/triangle'
import { IconTruck } from './components/Icon/truck'
import { IconTruckFast } from './components/Icon/truckFast'
import { IconTruckRemove } from './components/Icon/truckRemove'
import { IconTruckTick } from './components/Icon/truckTick'
import { IconTruckTime } from './components/Icon/truckTime'
import { IconTrushSquare } from './components/Icon/trushSquare'
import { IconUndo } from './components/Icon/undo'
import { IconUnlimited } from './components/Icon/unlimited'
import { IconUnlock } from './components/Icon/unlock'
import { IconUser } from './components/Icon/user'
import { IconUserAdd } from './components/Icon/userAdd'
import { IconUserCirlceAdd } from './components/Icon/userCirlceAdd'
import { IconUserEdit } from './components/Icon/userEdit'
import { IconUserHeart } from './components/Icon/userHeart'
import { IconUserMinus } from './components/Icon/userMinus'
import { IconUserOctagon } from './components/Icon/userOctagon'
import { IconUserRemove } from './components/Icon/userRemove'
import { IconUserSearch } from './components/Icon/userSearch'
import { IconUserSquare } from './components/Icon/userSquare'
import { IconUserTag } from './components/Icon/userTag'
import { IconUserTick } from './components/Icon/userTick'
import { IconVerify } from './components/Icon/verify'
import { IconVideo } from './components/Icon/video'
import { IconVideoAdd } from './components/Icon/videoAdd'
import { IconVideoCircle } from './components/Icon/videoCircle'
import { IconVideoHorizontal } from './components/Icon/videoHorizontal'
import { IconVideoOctagon } from './components/Icon/videoOctagon'
import { IconVideoPlay } from './components/Icon/videoPlay'
import { IconVideoRemove } from './components/Icon/videoRemove'
import { IconVideoSlash } from './components/Icon/videoSlash'
import { IconVideoSquare } from './components/Icon/videoSquare'
import { IconVideoTick } from './components/Icon/videoTick'
import { IconVideoTime } from './components/Icon/videoTime'
import { IconVideoVertical } from './components/Icon/videoVertical'
import { IconVoiceCricle } from './components/Icon/voiceCricle'
import { IconVoiceSquare } from './components/Icon/voiceSquare'
import { IconVolumeCross } from './components/Icon/volumeCross'
import { IconVolumeHigh } from './components/Icon/volumeHigh'
import { IconVolumeLow } from './components/Icon/volumeLow'
import { IconVolumeLow1 } from './components/Icon/volumeLow1'
import { IconVolumeMute } from './components/Icon/volumeMute'
import { IconVolumeSlash } from './components/Icon/volumeSlash'
import { IconVolumeUp } from './components/Icon/volumeUp'
import { IconWallet } from './components/Icon/wallet'
import { IconWallet1 } from './components/Icon/wallet1'
import { IconWallet2 } from './components/Icon/wallet2'
import { IconWallet3 } from './components/Icon/wallet3'
import { IconWalletAdd } from './components/Icon/walletAdd'
import { IconWalletAdd1 } from './components/Icon/walletAdd1'
import { IconWalletCheck } from './components/Icon/walletCheck'
import { IconWalletMinus } from './components/Icon/walletMinus'
import { IconWalletMoney } from './components/Icon/walletMoney'
import { IconWalletRemove } from './components/Icon/walletRemove'
import { IconWalletSearch } from './components/Icon/walletSearch'
import { IconWarning2 } from './components/Icon/warning2'
import { IconWatch } from './components/Icon/watch'
import { IconWatchStatus } from './components/Icon/watchStatus'
import { IconWeight } from './components/Icon/weight'
import { IconWeight1 } from './components/Icon/weight1'
import { IconWifi } from './components/Icon/wifi'
import { IconWifiSquare } from './components/Icon/wifiSquare'
import { IconWind } from './components/Icon/wind'
import { IconWind2 } from './components/Icon/wind2'
import { IconWoman } from './components/Icon/woman'

const list = [
  { name: <Icon24Support />, title: 'Icon24Support ' },
  { name: <Icon3dcube />, title: 'Icon3dcube ' },
  { name: <Icon3dCubeScan />, title: 'Icon3dCubeScan ' },
  { name: <Icon3dRotate />, title: 'Icon3dRotate ' },
  { name: <Icon3dSquare />, title: 'Icon3dSquare ' },
  { name: <Icon3square />, title: 'Icon3square ' },
  { name: <IconActivity />, title: 'IconActivity ' },
  { name: <IconAdd />, title: 'IconAdd ' },
  { name: <IconAddCircle />, title: 'IconAddCircle ' },
  { name: <IconAdditem />, title: 'IconAdditem ' },
  { name: <IconAddSquare />, title: 'IconAddSquare ' },
  { name: <IconAirdrop />, title: 'IconAirdrop ' },
  { name: <IconAirplane />, title: 'IconAirplane ' },
  { name: <IconAirplaneSquare />, title: 'IconAirplaneSquare ' },
  { name: <IconAirpod />, title: 'IconAirpod ' },
  { name: <IconAirpods />, title: 'IconAirpods ' },
  { name: <IconAlarm />, title: 'IconAlarm ' },
  { name: <IconAlignBottom />, title: 'IconAlignBottom ' },
  { name: <IconAlignHorizontally />, title: 'IconAlignHorizontally ' },
  { name: <IconAlignLeft />, title: 'IconAlignLeft ' },
  { name: <IconAlignRight />, title: 'IconAlignRight ' },
  { name: <IconAlignVertically />, title: 'IconAlignVertically ' },
  { name: <IconAquarius />, title: 'IconAquarius ' },
  { name: <IconArchive />, title: 'IconArchive ' },
  { name: <IconArchive1 />, title: 'IconArchive1 ' },
  { name: <IconArchive2 />, title: 'IconArchive2 ' },
  { name: <IconArchiveAdd />, title: 'IconArchiveAdd ' },
  { name: <IconArchiveBook />, title: 'IconArchiveBook ' },
  { name: <IconArchiveMinus />, title: 'IconArchiveMinus ' },
  { name: <IconArchiveSlash />, title: 'IconArchiveSlash ' },
  { name: <IconArchiveTick />, title: 'IconArchiveTick ' },
  { name: <IconArrangeCircle />, title: 'IconArrangeCircle ' },
  { name: <IconArrangeCircle2 />, title: 'IconArrangeCircle2 ' },
  { name: <IconArrangeSquare />, title: 'IconArrangeSquare ' },
  { name: <IconArrangeSquare2 />, title: 'IconArrangeSquare2 ' },
  { name: <IconArrow />, title: 'IconArrow ' },
  { name: <IconArrow2 />, title: 'IconArrow2 ' },
  { name: <IconArrow3 />, title: 'IconArrow3 ' },
  { name: <IconArrowBottom />, title: 'IconArrowBottom ' },
  { name: <IconArrowCircleDown />, title: 'IconArrowCircleDown ' },
  { name: <IconArrowCircleLeft />, title: 'IconArrowCircleLeft ' },
  { name: <IconArrowCircleRight />, title: 'IconArrowCircleRight ' },
  { name: <IconArrowCircleUp />, title: 'IconArrowCircleUp ' },
  { name: <IconArrowDown />, title: 'IconArrowDown ' },
  { name: <IconArrowDown1 />, title: 'IconArrowDown1 ' },
  { name: <IconArrowDown2 />, title: 'IconArrowDown2 ' },
  { name: <IconArrowLeft />, title: 'IconArrowLeft ' },
  { name: <IconArrowLeft1 />, title: 'IconArrowLeft1 ' },
  { name: <IconArrowLeft2 />, title: 'IconArrowLeft2 ' },
  { name: <IconArrowLeft3 />, title: 'IconArrowLeft3 ' },
  { name: <IconArrowRight />, title: 'IconArrowRight ' },
  { name: <IconArrowRight1 />, title: 'IconArrowRight1 ' },
  { name: <IconArrowRight2 />, title: 'IconArrowRight2 ' },
  { name: <IconArrowRight3 />, title: 'IconArrowRight3 ' },
  { name: <IconArrowRight4 />, title: 'IconArrowRight4 ' },
  { name: <IconArrowSquare />, title: 'IconArrowSquare ' },
  { name: <IconArrowSquareDown />, title: 'IconArrowSquareDown ' },
  { name: <IconArrowSquareLeft />, title: 'IconArrowSquareLeft ' },
  { name: <IconArrowSquareUp />, title: 'IconArrowSquareUp ' },
  { name: <IconArrowSwap />, title: 'IconArrowSwap ' },
  { name: <IconArrowSwapHorizontal />, title: 'IconArrowSwapHorizontal ' },
  { name: <IconArrowUp />, title: 'IconArrowUp ' },
  { name: <IconArrowUp1 />, title: 'IconArrowUp1 ' },
  { name: <IconArrowUp2 />, title: 'IconArrowUp2 ' },
  { name: <IconArrowUp3 />, title: 'IconArrowUp3 ' },
  { name: <IconAttachCircle />, title: 'IconAttachCircle ' },
  { name: <IconAttachSquare />, title: 'IconAttachSquare ' },
  { name: <IconAudioSquare />, title: 'IconAudioSquare ' },
  { name: <IconAutobrightness />, title: 'IconAutobrightness ' },
  { name: <IconAward />, title: 'IconAward ' },
  { name: <IconBackSquare />, title: 'IconBackSquare ' },
  { name: <IconBackward />, title: 'IconBackward ' },
  { name: <IconBackward10Seconds />, title: 'IconBackward10Seconds ' },
  { name: <IconBackward15Seconds />, title: 'IconBackward15Seconds ' },
  { name: <IconBackward5Seconds />, title: 'IconBackward5Seconds ' },
  { name: <IconBackwardItem />, title: 'IconBackwardItem ' },
  { name: <IconBag />, title: 'IconBag ' },
  { name: <IconBag2 />, title: 'IconBag2 ' },
  { name: <IconBagCross />, title: 'IconBagCross ' },
  { name: <IconBagCross1 />, title: 'IconBagCross1 ' },
  { name: <IconBagHappy />, title: 'IconBagHappy ' },
  { name: <IconBagTick />, title: 'IconBagTick ' },
  { name: <IconBagTick2 />, title: 'IconBagTick2 ' },
  { name: <IconBagTimer />, title: 'IconBagTimer ' },
  { name: <IconBank />, title: 'IconBank ' },
  { name: <IconBarcode />, title: 'IconBarcode ' },
  { name: <IconBattery3full />, title: 'IconBattery3full ' },
  { name: <IconBatteryCharging />, title: 'IconBatteryCharging ' },
  { name: <IconBatteryDisable />, title: 'IconBatteryDisable ' },
  { name: <IconBatteryEmpty />, title: 'IconBatteryEmpty ' },
  { name: <IconBatteryEmpty1 />, title: 'IconBatteryEmpty1 ' },
  { name: <IconBatteryFull />, title: 'IconBatteryFull ' },
  { name: <IconBezier />, title: 'IconBezier ' },
  { name: <IconBill />, title: 'IconBill ' },
  { name: <IconBitcoinCard />, title: 'IconBitcoinCard ' },
  { name: <IconBitcoinConvert />, title: 'IconBitcoinConvert ' },
  { name: <IconBitcoinRefresh />, title: 'IconBitcoinRefresh ' },
  { name: <IconBlend />, title: 'IconBlend ' },
  { name: <IconBlend2 />, title: 'IconBlend2 ' },
  { name: <IconBluetooth />, title: 'IconBluetooth ' },
  { name: <IconBluetooth2 />, title: 'IconBluetooth2 ' },
  { name: <IconBluetoothCircle />, title: 'IconBluetoothCircle ' },
  { name: <IconBluetoothRectangle />, title: 'IconBluetoothRectangle ' },
  { name: <IconBlur />, title: 'IconBlur ' },
  { name: <IconBook />, title: 'IconBook ' },
  { name: <IconBook1 />, title: 'IconBook1 ' },
  { name: <IconBookmark />, title: 'IconBookmark ' },
  { name: <IconBookmark2 />, title: 'IconBookmark2 ' },
  { name: <IconBookSaved />, title: 'IconBookSaved ' },
  { name: <IconBookSquare />, title: 'IconBookSquare ' },
  { name: <IconBox />, title: 'IconBox ' },
  { name: <IconBox1 />, title: 'IconBox1 ' },
  { name: <IconBox2 />, title: 'IconBox2 ' },
  { name: <IconBoxAdd />, title: 'IconBoxAdd ' },
  { name: <IconBoxRemove />, title: 'IconBoxRemove ' },
  { name: <IconBoxSearch />, title: 'IconBoxSearch ' },
  { name: <IconBoxTick />, title: 'IconBoxTick ' },
  { name: <IconBoxTime />, title: 'IconBoxTime ' },
  { name: <IconBriefcase />, title: 'IconBriefcase ' },
  { name: <IconBrifecaseCross />, title: 'IconBrifecaseCross ' },
  { name: <IconBrifecaseTick />, title: 'IconBrifecaseTick ' },
  { name: <IconBrifecaseTimer />, title: 'IconBrifecaseTimer ' },
  { name: <IconBroom />, title: 'IconBroom ' },
  { name: <IconBrush />, title: 'IconBrush ' },
  { name: <IconBrush1 />, title: 'IconBrush1 ' },
  { name: <IconBrush2 />, title: 'IconBrush2 ' },
  { name: <IconBrush3 />, title: 'IconBrush3 ' },
  { name: <IconBrush4 />, title: 'IconBrush4 ' },
  { name: <IconBubble />, title: 'IconBubble ' },
  { name: <IconBucket />, title: 'IconBucket ' },
  { name: <IconBucketCircle />, title: 'IconBucketCircle ' },
  { name: <IconBucketSquare />, title: 'IconBucketSquare ' },
  { name: <IconBuilding />, title: 'IconBuilding ' },
  { name: <IconBuilding3 />, title: 'IconBuilding3 ' },
  { name: <IconBuilding4 />, title: 'IconBuilding4 ' },
  { name: <IconBuildings />, title: 'IconBuildings ' },
  { name: <IconBuildings2 />, title: 'IconBuildings2 ' },
  { name: <IconBuliding />, title: 'IconBuliding ' },
  { name: <IconBus />, title: 'IconBus ' },
  { name: <IconBuyCrypto />, title: 'IconBuyCrypto ' },
  { name: <IconCake />, title: 'IconCake ' },
  { name: <IconCalculator />, title: 'IconCalculator ' },
  { name: <IconCalendar />, title: 'IconCalendar ' },
  { name: <IconCalendar1 />, title: 'IconCalendar1 ' },
  { name: <IconCalendar2 />, title: 'IconCalendar2 ' },
  { name: <IconCalendarAdd />, title: 'IconCalendarAdd ' },
  { name: <IconCalendarCircle />, title: 'IconCalendarCircle ' },
  { name: <IconCalendarEdit />, title: 'IconCalendarEdit ' },
  { name: <IconCalendarRemove />, title: 'IconCalendarRemove ' },
  { name: <IconCalendarSearch />, title: 'IconCalendarSearch ' },
  { name: <IconCalendarTick />, title: 'IconCalendarTick ' },
  { name: <IconCall />, title: 'IconCall ' },
  { name: <IconCallAdd />, title: 'IconCallAdd ' },
  { name: <IconCallCalling />, title: 'IconCallCalling ' },
  { name: <IconCallIncoming />, title: 'IconCallIncoming ' },
  { name: <IconCallMinus />, title: 'IconCallMinus ' },
  { name: <IconCallOutgoing />, title: 'IconCallOutgoing ' },
  { name: <IconCallReceived />, title: 'IconCallReceived ' },
  { name: <IconCallRemove />, title: 'IconCallRemove ' },
  { name: <IconCallSlash />, title: 'IconCallSlash ' },
  { name: <IconCamera />, title: 'IconCamera ' },
  { name: <IconCameraSlash />, title: 'IconCameraSlash ' },
  { name: <IconCandle />, title: 'IconCandle ' },
  { name: <IconCandle2 />, title: 'IconCandle2 ' },
  { name: <IconCar />, title: 'IconCar ' },
  { name: <IconCard />, title: 'IconCard ' },
  { name: <IconCardAdd />, title: 'IconCardAdd ' },
  { name: <IconCardCoin />, title: 'IconCardCoin ' },
  { name: <IconCardEdit />, title: 'IconCardEdit ' },
  { name: <IconCardPos />, title: 'IconCardPos ' },
  { name: <IconCardReceive />, title: 'IconCardReceive ' },
  { name: <IconCardRemove />, title: 'IconCardRemove ' },
  { name: <IconCardRemove1 />, title: 'IconCardRemove1 ' },
  { name: <IconCards />, title: 'IconCards ' },
  { name: <IconCardSend />, title: 'IconCardSend ' },
  { name: <IconCardSlash />, title: 'IconCardSlash ' },
  { name: <IconCardTick />, title: 'IconCardTick ' },
  { name: <IconCardTick1 />, title: 'IconCardTick1 ' },
  { name: <IconCategory />, title: 'IconCategory ' },
  { name: <IconCategory2 />, title: 'IconCategory2 ' },
  { name: <IconCd />, title: 'IconCd ' },
  { name: <IconChart />, title: 'IconChart ' },
  { name: <IconChart1 />, title: 'IconChart1 ' },
  { name: <IconChart2 />, title: 'IconChart2 ' },
  { name: <IconChart21 />, title: 'IconChart21 ' },
  { name: <IconChart3 />, title: 'IconChart3 ' },
  { name: <IconChartFail />, title: 'IconChartFail ' },
  { name: <IconChartSquare />, title: 'IconChartSquare ' },
  { name: <IconChartSuccess />, title: 'IconChartSuccess ' },
  { name: <IconCheck />, title: 'IconCheck ' },
  { name: <IconChrome />, title: 'IconChrome ' },
  { name: <IconClipboard />, title: 'IconClipboard ' },
  { name: <IconClipboardClose />, title: 'IconClipboardClose ' },
  { name: <IconClipboardExport />, title: 'IconClipboardExport ' },
  { name: <IconClipboardImport />, title: 'IconClipboardImport ' },
  { name: <IconClipboardText />, title: 'IconClipboardText ' },
  { name: <IconClipboardTick />, title: 'IconClipboardTick ' },
  { name: <IconClock />, title: 'IconClock ' },
  { name: <IconClock1 />, title: 'IconClock1 ' },
  { name: <IconCloseCircle />, title: 'IconCloseCircle ' },
  { name: <IconCloseSquare />, title: 'IconCloseSquare ' },
  { name: <IconCloud />, title: 'IconCloud ' },
  { name: <IconCloudAdd />, title: 'IconCloudAdd ' },
  { name: <IconCloudChange />, title: 'IconCloudChange ' },
  { name: <IconCloudConnection />, title: 'IconCloudConnection ' },
  { name: <IconCloudCross />, title: 'IconCloudCross ' },
  { name: <IconCloudDrizzle />, title: 'IconCloudDrizzle ' },
  { name: <IconCloudFog />, title: 'IconCloudFog ' },
  { name: <IconCloudLightning />, title: 'IconCloudLightning ' },
  { name: <IconCloudMinus />, title: 'IconCloudMinus ' },
  { name: <IconCloudNotif />, title: 'IconCloudNotif ' },
  { name: <IconCloudPlus />, title: 'IconCloudPlus ' },
  { name: <IconCloudRemove />, title: 'IconCloudRemove ' },
  { name: <IconCloudSnow />, title: 'IconCloudSnow ' },
  { name: <IconCloudSunny />, title: 'IconCloudSunny ' },
  { name: <IconCode />, title: 'IconCode ' },
  { name: <IconCode1 />, title: 'IconCode1 ' },
  { name: <IconCodeCircle />, title: 'IconCodeCircle ' },
  { name: <IconCoffee />, title: 'IconCoffee ' },
  { name: <IconCoin />, title: 'IconCoin ' },
  { name: <IconCoin1 />, title: 'IconCoin1 ' },
  { name: <IconColorfilter />, title: 'IconColorfilter ' },
  { name: <IconColorsSquare />, title: 'IconColorsSquare ' },
  { name: <IconColorSwatch />, title: 'IconColorSwatch ' },
  { name: <IconCommand />, title: 'IconCommand ' },
  { name: <IconCommandSquare />, title: 'IconCommandSquare ' },
  { name: <IconComponent />, title: 'IconComponent ' },
  { name: <IconComputing />, title: 'IconComputing ' },
  { name: <IconConvert />, title: 'IconConvert ' },
  { name: <IconConvert3dCube />, title: 'IconConvert3dCube ' },
  { name: <IconConvertCard />, title: 'IconConvertCard ' },
  { name: <IconConvertshape />, title: 'IconConvertshape ' },
  { name: <IconConvertshape2 />, title: 'IconConvertshape2 ' },
  { name: <IconCopy />, title: 'IconCopy ' },
  { name: <IconCopyright />, title: 'IconCopyright ' },
  { name: <IconCopySuccess />, title: 'IconCopySuccess ' },
  { name: <IconCourthouse />, title: 'IconCourthouse ' },
  { name: <IconCpu />, title: 'IconCpu ' },
  { name: <IconCpuCharge />, title: 'IconCpuCharge ' },
  { name: <IconCpuSetting />, title: 'IconCpuSetting ' },
  { name: <IconCreativeCommons />, title: 'IconCreativeCommons ' },
  { name: <IconCrop />, title: 'IconCrop ' },
  { name: <IconCrown />, title: 'IconCrown ' },
  { name: <IconCrown1 />, title: 'IconCrown1 ' },
  { name: <IconCup />, title: 'IconCup ' },
  { name: <IconDanger />, title: 'IconDanger ' },
  { name: <IconData />, title: 'IconData ' },
  { name: <IconData2 />, title: 'IconData2 ' },
  { name: <IconDesigntools />, title: 'IconDesigntools ' },
  { name: <IconDeviceMessage />, title: 'IconDeviceMessage ' },
  { name: <IconDevices />, title: 'IconDevices ' },
  { name: <IconDevices1 />, title: 'IconDevices1 ' },
  { name: <IconDiagram />, title: 'IconDiagram ' },
  { name: <IconDiamonds />, title: 'IconDiamonds ' },
  { name: <IconDirect />, title: 'IconDirect ' },
  { name: <IconDirectboxDefault />, title: 'IconDirectboxDefault ' },
  { name: <IconDirectboxNotif />, title: 'IconDirectboxNotif ' },
  { name: <IconDirectboxReceive />, title: 'IconDirectboxReceive ' },
  { name: <IconDirectboxSend />, title: 'IconDirectboxSend ' },
  { name: <IconDirectDown />, title: 'IconDirectDown ' },
  { name: <IconDirectInbox />, title: 'IconDirectInbox ' },
  { name: <IconDirectLeft />, title: 'IconDirectLeft ' },
  { name: <IconDirectNormal />, title: 'IconDirectNormal ' },
  { name: <IconDirectNotification />, title: 'IconDirectNotification ' },
  { name: <IconDirectRight />, title: 'IconDirectRight ' },
  { name: <IconDirectSend />, title: 'IconDirectSend ' },
  { name: <IconDirectUp />, title: 'IconDirectUp ' },
  { name: <IconDiscountCircle />, title: 'IconDiscountCircle ' },
  { name: <IconDiscountShape />, title: 'IconDiscountShape ' },
  { name: <IconDiscover />, title: 'IconDiscover ' },
  { name: <IconDiscover1 />, title: 'IconDiscover1 ' },
  { name: <IconDislike />, title: 'IconDislike ' },
  { name: <IconDocument />, title: 'IconDocument ' },
  { name: <IconDocument1 />, title: 'IconDocument1 ' },
  { name: <IconDocumentCloud />, title: 'IconDocumentCloud ' },
  { name: <IconDocumentCode />, title: 'IconDocumentCode ' },
  { name: <IconDocumentCode2 />, title: 'IconDocumentCode2 ' },
  { name: <IconDocumentCopy />, title: 'IconDocumentCopy ' },
  { name: <IconDocumentDownload />, title: 'IconDocumentDownload ' },
  { name: <IconDocumentFavorite />, title: 'IconDocumentFavorite ' },
  { name: <IconDocumentFilter />, title: 'IconDocumentFilter ' },
  { name: <IconDocumentForward />, title: 'IconDocumentForward ' },
  { name: <IconDocumentLike />, title: 'IconDocumentLike ' },
  { name: <IconDocumentNormal />, title: 'IconDocumentNormal ' },
  { name: <IconDocumentPrevious />, title: 'IconDocumentPrevious ' },
  { name: <IconDocumentSketch />, title: 'IconDocumentSketch ' },
  { name: <IconDocumentText />, title: 'IconDocumentText ' },
  { name: <IconDocumentText1 />, title: 'IconDocumentText1 ' },
  { name: <IconDocumentUpload />, title: 'IconDocumentUpload ' },
  { name: <IconDollarCircle />, title: 'IconDollarCircle ' },
  { name: <IconDollarSquare />, title: 'IconDollarSquare ' },
  { name: <IconDriver />, title: 'IconDriver ' },
  { name: <IconDriver2 />, title: 'IconDriver2 ' },
  { name: <IconDriverRefresh />, title: 'IconDriverRefresh ' },
  { name: <IconDriving />, title: 'IconDriving ' },
  { name: <IconEdit />, title: 'IconEdit ' },
  { name: <IconEdit2 />, title: 'IconEdit2 ' },
  { name: <IconElectricity />, title: 'IconElectricity ' },
  { name: <IconElement2 />, title: 'IconElement2 ' },
  { name: <IconElement3 />, title: 'IconElement3 ' },
  { name: <IconElement4 />, title: 'IconElement4 ' },
  { name: <IconElementEqual />, title: 'IconElementEqual ' },
  { name: <IconElementPlus />, title: 'IconElementPlus ' },
  { name: <IconEmojiHappy />, title: 'IconEmojiHappy ' },
  { name: <IconEmojiNormal />, title: 'IconEmojiNormal ' },
  { name: <IconEmojiSad />, title: 'IconEmojiSad ' },
  { name: <IconEmptyWallet />, title: 'IconEmptyWallet ' },
  { name: <IconEmptyWalletAdd />, title: 'IconEmptyWalletAdd ' },
  { name: <IconEmptyWalletChange />, title: 'IconEmptyWalletChange ' },
  { name: <IconEmptyWalletRemove />, title: 'IconEmptyWalletRemove ' },
  { name: <IconEmptyWalletTick />, title: 'IconEmptyWalletTick ' },
  { name: <IconEmptyWalletTime />, title: 'IconEmptyWalletTime ' },
  { name: <IconEraser />, title: 'IconEraser ' },
  { name: <IconEraser1 />, title: 'IconEraser1 ' },
  { name: <IconExport />, title: 'IconExport ' },
  { name: <IconExport1 />, title: 'IconExport1 ' },
  { name: <IconExport2 />, title: 'IconExport2 ' },
  { name: <IconExport3 />, title: 'IconExport3 ' },
  { name: <IconExternalDrive />, title: 'IconExternalDrive ' },
  { name: <IconEye />, title: 'IconEye ' },
  { name: <IconEyeSlash />, title: 'IconEyeSlash ' },
  { name: <IconFatrows />, title: 'IconFatrows ' },
  { name: <IconFavoriteChart />, title: 'IconFavoriteChart ' },
  { name: <IconFilter />, title: 'IconFilter ' },
  { name: <IconFilterAdd />, title: 'IconFilterAdd ' },
  { name: <IconFilterEdit />, title: 'IconFilterEdit ' },
  { name: <IconFilterRemove />, title: 'IconFilterRemove ' },
  { name: <IconFilterSearch />, title: 'IconFilterSearch ' },
  { name: <IconFilterSquare />, title: 'IconFilterSquare ' },
  { name: <IconFilterTick />, title: 'IconFilterTick ' },
  { name: <IconFingerCricle />, title: 'IconFingerCricle ' },
  { name: <IconFingerScan />, title: 'IconFingerScan ' },
  { name: <IconFirstline />, title: 'IconFirstline ' },
  { name: <IconFlag />, title: 'IconFlag ' },
  { name: <IconFlag2 />, title: 'IconFlag2 ' },
  { name: <IconFlash />, title: 'IconFlash ' },
  { name: <IconFlash1 />, title: 'IconFlash1 ' },
  { name: <IconFlashCircle />, title: 'IconFlashCircle ' },
  { name: <IconFlashCircle1 />, title: 'IconFlashCircle1 ' },
  { name: <IconFlashSlash />, title: 'IconFlashSlash ' },
  { name: <IconFolder />, title: 'IconFolder ' },
  { name: <IconFolder2 />, title: 'IconFolder2 ' },
  { name: <IconFolderAdd />, title: 'IconFolderAdd ' },
  { name: <IconFolderCloud />, title: 'IconFolderCloud ' },
  { name: <IconFolderConnection />, title: 'IconFolderConnection ' },
  { name: <IconFolderCross />, title: 'IconFolderCross ' },
  { name: <IconFolderFavorite />, title: 'IconFolderFavorite ' },
  { name: <IconFolderMinus />, title: 'IconFolderMinus ' },
  { name: <IconFolderOpen />, title: 'IconFolderOpen ' },
  { name: <IconForbidden />, title: 'IconForbidden ' },
  { name: <IconForbidden2 />, title: 'IconForbidden2 ' },
  { name: <IconFormatCircle />, title: 'IconFormatCircle ' },
  { name: <IconFormatSquare />, title: 'IconFormatSquare ' },
  { name: <IconForward />, title: 'IconForward ' },
  { name: <IconForward10Seconds />, title: 'IconForward10Seconds ' },
  { name: <IconForward15Seconds />, title: 'IconForward15Seconds ' },
  { name: <IconForward5Seconds />, title: 'IconForward5Seconds ' },
  { name: <IconForwardItem />, title: 'IconForwardItem ' },
  { name: <IconForwardSquare />, title: 'IconForwardSquare ' },
  { name: <IconFrame />, title: 'IconFrame ' },
  { name: <IconFrame1 />, title: 'IconFrame1 ' },
  { name: <IconFrame2 />, title: 'IconFrame2 ' },
  { name: <IconFrame3 />, title: 'IconFrame3 ' },
  { name: <IconFrame4 />, title: 'IconFrame4 ' },
  { name: <IconGallery />, title: 'IconGallery ' },
  { name: <IconGalleryAdd />, title: 'IconGalleryAdd ' },
  { name: <IconGalleryEdit />, title: 'IconGalleryEdit ' },
  { name: <IconGalleryExport />, title: 'IconGalleryExport ' },
  { name: <IconGalleryFavorite />, title: 'IconGalleryFavorite ' },
  { name: <IconGalleryImport />, title: 'IconGalleryImport ' },
  { name: <IconGalleryRemove />, title: 'IconGalleryRemove ' },
  { name: <IconGallerySlash />, title: 'IconGallerySlash ' },
  { name: <IconGalleryTick />, title: 'IconGalleryTick ' },
  { name: <IconGame />, title: 'IconGame ' },
  { name: <IconGameboy />, title: 'IconGameboy ' },
  { name: <IconGasStation />, title: 'IconGasStation ' },
  { name: <IconGemini />, title: 'IconGemini ' },
  { name: <IconGemini2 />, title: 'IconGemini2 ' },
  { name: <IconGhost />, title: 'IconGhost ' },
  { name: <IconGift />, title: 'IconGift ' },
  { name: <IconGlass />, title: 'IconGlass ' },
  { name: <IconGlass1 />, title: 'IconGlass1 ' },
  { name: <IconGlobal />, title: 'IconGlobal ' },
  { name: <IconGlobalEdit />, title: 'IconGlobalEdit ' },
  { name: <IconGlobalRefresh />, title: 'IconGlobalRefresh ' },
  { name: <IconGlobalSearch />, title: 'IconGlobalSearch ' },
  { name: <IconGps />, title: 'IconGps ' },
  { name: <IconGpsSlash />, title: 'IconGpsSlash ' },
  { name: <IconGrammerly />, title: 'IconGrammerly ' },
  { name: <IconGraph />, title: 'IconGraph ' },
  { name: <IconGrid1 />, title: 'IconGrid1 ' },
  { name: <IconGrid2 />, title: 'IconGrid2 ' },
  { name: <IconGrid3 />, title: 'IconGrid3 ' },
  { name: <IconGrid4 />, title: 'IconGrid4 ' },
  { name: <IconGrid5 />, title: 'IconGrid5 ' },
  { name: <IconGrid6 />, title: 'IconGrid6 ' },
  { name: <IconGrid7 />, title: 'IconGrid7 ' },
  { name: <IconGrid8 />, title: 'IconGrid8 ' },
  { name: <IconGrid9 />, title: 'IconGrid9 ' },
  { name: <IconGridEdit />, title: 'IconGridEdit ' },
  { name: <IconGridEraser />, title: 'IconGridEraser ' },
  { name: <IconGridLock />, title: 'IconGridLock ' },
  { name: <IconHappyemoji />, title: 'IconHappyemoji ' },
  { name: <IconHashtag />, title: 'IconHashtag ' },
  { name: <IconHashtag1 />, title: 'IconHashtag1 ' },
  { name: <IconHashtagDown />, title: 'IconHashtagDown ' },
  { name: <IconHashtagUp />, title: 'IconHashtagUp ' },
  { name: <IconHeadphone />, title: 'IconHeadphone ' },
  { name: <IconHeadphones />, title: 'IconHeadphones ' },
  { name: <IconHealth />, title: 'IconHealth ' },
  { name: <IconHeart />, title: 'IconHeart ' },
  { name: <IconHeartAdd />, title: 'IconHeartAdd ' },
  { name: <IconHeartCircle />, title: 'IconHeartCircle ' },
  { name: <IconHeartEdit />, title: 'IconHeartEdit ' },
  { name: <IconHeartRemove />, title: 'IconHeartRemove ' },
  { name: <IconHeartSearch />, title: 'IconHeartSearch ' },
  { name: <IconHeartSlash />, title: 'IconHeartSlash ' },
  { name: <IconHeartTick />, title: 'IconHeartTick ' },
  { name: <IconHierarchy />, title: 'IconHierarchy ' },
  { name: <IconHierarchy2 />, title: 'IconHierarchy2 ' },
  { name: <IconHierarchy3 />, title: 'IconHierarchy3 ' },
  { name: <IconHierarchySquare />, title: 'IconHierarchySquare ' },
  { name: <IconHierarchySquare2 />, title: 'IconHierarchySquare2 ' },
  { name: <IconHierarchySquare3 />, title: 'IconHierarchySquare3 ' },
  { name: <IconHome />, title: 'IconHome ' },
  { name: <IconHome1 />, title: 'IconHome1 ' },
  { name: <IconHome2 />, title: 'IconHome2 ' },
  { name: <IconHomeHashtag />, title: 'IconHomeHashtag ' },
  { name: <IconHomeTrendDown />, title: 'IconHomeTrendDown ' },
  { name: <IconHomeTrendUp />, title: 'IconHomeTrendUp ' },
  { name: <IconHomeWifi />, title: 'IconHomeWifi ' },
  { name: <IconHospital />, title: 'IconHospital ' },
  { name: <IconHouse />, title: 'IconHouse ' },
  { name: <IconHouse2 />, title: 'IconHouse2 ' },
  { name: <IconIcon />, title: 'IconIcon ' },
  { name: <IconImage />, title: 'IconImage ' },
  { name: <IconImport />, title: 'IconImport ' },
  { name: <IconImport1 />, title: 'IconImport1 ' },
  { name: <IconImport2 />, title: 'IconImport2 ' },
  { name: <IconInfoCircle />, title: 'IconInfoCircle ' },
  { name: <IconInformation />, title: 'IconInformation ' },
  { name: <IconInstagram />, title: 'IconInstagram ' },
  { name: <IconJudge />, title: 'IconJudge ' },
  { name: <IconKanban />, title: 'IconKanban ' },
  { name: <IconKey />, title: 'IconKey ' },
  { name: <IconKeyboard />, title: 'IconKeyboard ' },
  { name: <IconKeyboardOpen />, title: 'IconKeyboardOpen ' },
  { name: <IconKeySquare />, title: 'IconKeySquare ' },
  { name: <IconLamp />, title: 'IconLamp ' },
  { name: <IconLamp1 />, title: 'IconLamp1 ' },
  { name: <IconLampCharge />, title: 'IconLampCharge ' },
  { name: <IconLampOn />, title: 'IconLampOn ' },
  { name: <IconLampSlash />, title: 'IconLampSlash ' },
  { name: <IconLanguageCircle />, title: 'IconLanguageCircle ' },
  { name: <IconLanguageSquare />, title: 'IconLanguageSquare ' },
  { name: <IconLayer />, title: 'IconLayer ' },
  { name: <IconLevel />, title: 'IconLevel ' },
  { name: <IconLifebuoy />, title: 'IconLifebuoy ' },
  { name: <IconLike />, title: 'IconLike ' },
  { name: <IconLike1 />, title: 'IconLike1 ' },
  { name: <IconLikeDislike />, title: 'IconLikeDislike ' },
  { name: <IconLikeShapes />, title: 'IconLikeShapes ' },
  { name: <IconLikeTag />, title: 'IconLikeTag ' },
  { name: <IconLink />, title: 'IconLink ' },
  { name: <IconLink1 />, title: 'IconLink1 ' },
  { name: <IconLink2 />, title: 'IconLink2 ' },
  { name: <IconLink21 />, title: 'IconLink21 ' },
  { name: <IconLinkCircle />, title: 'IconLinkCircle ' },
  { name: <IconLinkSquare />, title: 'IconLinkSquare ' },
  { name: <IconLocation />, title: 'IconLocation ' },
  { name: <IconLocationAdd />, title: 'IconLocationAdd ' },
  { name: <IconLocationCross />, title: 'IconLocationCross ' },
  { name: <IconLocationMinus />, title: 'IconLocationMinus ' },
  { name: <IconLocationSlash />, title: 'IconLocationSlash ' },
  { name: <IconLocationTick />, title: 'IconLocationTick ' },
  { name: <IconLock />, title: 'IconLock ' },
  { name: <IconLock1 />, title: 'IconLock1 ' },
  { name: <IconLockCircle />, title: 'IconLockCircle ' },
  { name: <IconLockSlash />, title: 'IconLockSlash ' },
  { name: <IconLogin />, title: 'IconLogin ' },
  { name: <IconLogin1 />, title: 'IconLogin1 ' },
  { name: <IconLogout />, title: 'IconLogout ' },
  { name: <IconLogout1 />, title: 'IconLogout1 ' },
  { name: <IconLovely />, title: 'IconLovely ' },
  { name: <IconMagicpen />, title: 'IconMagicpen ' },
  { name: <IconMagicStar />, title: 'IconMagicStar ' },
  { name: <IconMainComponent />, title: 'IconMainComponent ' },
  { name: <IconMan />, title: 'IconMan ' },
  { name: <IconMap />, title: 'IconMap ' },
  { name: <IconMap1 />, title: 'IconMap1 ' },
  { name: <IconMask />, title: 'IconMask ' },
  { name: <IconMask1 />, title: 'IconMask1 ' },
  { name: <IconMask2 />, title: 'IconMask2 ' },
  { name: <IconMath />, title: 'IconMath ' },
  { name: <IconMaximize />, title: 'IconMaximize ' },
  { name: <IconMaximize1 />, title: 'IconMaximize1 ' },
  { name: <IconMaximize2 />, title: 'IconMaximize2 ' },
  { name: <IconMaximize21 />, title: 'IconMaximize21 ' },
  { name: <IconMaximize3 />, title: 'IconMaximize3 ' },
  { name: <IconMaximize4 />, title: 'IconMaximize4 ' },
  { name: <IconMaximizeCircle />, title: 'IconMaximizeCircle ' },
  { name: <IconMedal />, title: 'IconMedal ' },
  { name: <IconMedalStar />, title: 'IconMedalStar ' },
  { name: <IconMenu />, title: 'IconMenu ' },
  { name: <IconMenu1 />, title: 'IconMenu1 ' },
  { name: <IconMenuBoard />, title: 'IconMenuBoard ' },
  { name: <IconMessage />, title: 'IconMessage ' },
  { name: <IconMessage2 />, title: 'IconMessage2 ' },
  { name: <IconMessageAdd />, title: 'IconMessageAdd ' },
  { name: <IconMessageAdd1 />, title: 'IconMessageAdd1 ' },
  { name: <IconMessageCircle />, title: 'IconMessageCircle ' },
  { name: <IconMessageEdit />, title: 'IconMessageEdit ' },
  { name: <IconMessageFavorite />, title: 'IconMessageFavorite ' },
  { name: <IconMessageMinus />, title: 'IconMessageMinus ' },
  { name: <IconMessageNotif />, title: 'IconMessageNotif ' },
  { name: <IconMessageProgramming />, title: 'IconMessageProgramming ' },
  { name: <IconMessageQuestion />, title: 'IconMessageQuestion ' },
  { name: <IconMessageRemove />, title: 'IconMessageRemove ' },
  { name: <IconMessages />, title: 'IconMessages ' },
  { name: <IconMessages1 />, title: 'IconMessages1 ' },
  { name: <IconMessages2 />, title: 'IconMessages2 ' },
  { name: <IconMessages3 />, title: 'IconMessages3 ' },
  { name: <IconMessageSearch />, title: 'IconMessageSearch ' },
  { name: <IconMessageSquare />, title: 'IconMessageSquare ' },
  { name: <IconMessageText />, title: 'IconMessageText ' },
  { name: <IconMessageText1 />, title: 'IconMessageText1 ' },
  { name: <IconMessageTick />, title: 'IconMessageTick ' },
  { name: <IconMessageTime />, title: 'IconMessageTime ' },
  { name: <IconMicrophone />, title: 'IconMicrophone ' },
  { name: <IconMicrophone2 />, title: 'IconMicrophone2 ' },
  { name: <IconMicrophoneSlash />, title: 'IconMicrophoneSlash ' },
  { name: <IconMicrophoneSlash1 />, title: 'IconMicrophoneSlash1 ' },
  { name: <IconMicroscope />, title: 'IconMicroscope ' },
  { name: <IconMilk />, title: 'IconMilk ' },
  { name: <IconMiniMusicSqaure />, title: 'IconMiniMusicSqaure ' },
  { name: <IconMinus />, title: 'IconMinus ' },
  { name: <IconMinusCirlce />, title: 'IconMinusCirlce ' },
  { name: <IconMinusSquare />, title: 'IconMinusSquare ' },
  { name: <IconMirror />, title: 'IconMirror ' },
  { name: <IconMirroringScreen />, title: 'IconMirroringScreen ' },
  { name: <IconMobile />, title: 'IconMobile ' },
  { name: <IconMobileProgramming />, title: 'IconMobileProgramming ' },
  { name: <IconMoney />, title: 'IconMoney ' },
  { name: <IconMoney2 />, title: 'IconMoney2 ' },
  { name: <IconMoney3 />, title: 'IconMoney3 ' },
  { name: <IconMoney4 />, title: 'IconMoney4 ' },
  { name: <IconMoneyAdd />, title: 'IconMoneyAdd ' },
  { name: <IconMoneyChange />, title: 'IconMoneyChange ' },
  { name: <IconMoneyForbidden />, title: 'IconMoneyForbidden ' },
  { name: <IconMoneyRecive />, title: 'IconMoneyRecive ' },
  { name: <IconMoneyRemove />, title: 'IconMoneyRemove ' },
  { name: <IconMoneys />, title: 'IconMoneys ' },
  { name: <IconMoneySend />, title: 'IconMoneySend ' },
  { name: <IconMoneyTick />, title: 'IconMoneyTick ' },
  { name: <IconMoneyTime />, title: 'IconMoneyTime ' },
  { name: <IconMonitor />, title: 'IconMonitor ' },
  { name: <IconMonitorMobbile />, title: 'IconMonitorMobbile ' },
  { name: <IconMonitorRecorder />, title: 'IconMonitorRecorder ' },
  { name: <IconMoon />, title: 'IconMoon ' },
  { name: <IconMore />, title: 'IconMore ' },
  { name: <IconMore2 />, title: 'IconMore2 ' },
  { name: <IconMoreCircle />, title: 'IconMoreCircle ' },
  { name: <IconMoreSquare />, title: 'IconMoreSquare ' },
  { name: <IconMouse />, title: 'IconMouse ' },
  { name: <IconMouse1 />, title: 'IconMouse1 ' },
  { name: <IconMouseCircle />, title: 'IconMouseCircle ' },
  { name: <IconMouseSquare />, title: 'IconMouseSquare ' },
  { name: <IconMusic />, title: 'IconMusic ' },
  { name: <IconMusicCircle />, title: 'IconMusicCircle ' },
  { name: <IconMusicDashboard />, title: 'IconMusicDashboard ' },
  { name: <IconMusicFilter />, title: 'IconMusicFilter ' },
  { name: <IconMusicLibrary2 />, title: 'IconMusicLibrary2 ' },
  { name: <IconMusicnote />, title: 'IconMusicnote ' },
  { name: <IconMusicPlay />, title: 'IconMusicPlay ' },
  { name: <IconMusicPlaylist />, title: 'IconMusicPlaylist ' },
  { name: <IconMusicSquare />, title: 'IconMusicSquare ' },
  { name: <IconMusicSquareAdd />, title: 'IconMusicSquareAdd ' },
  { name: <IconMusicSquareRemove />, title: 'IconMusicSquareRemove ' },
  { name: <IconMusicSquareSearch />, title: 'IconMusicSquareSearch ' },
  { name: <IconNext />, title: 'IconNext ' },
  { name: <IconNote />, title: 'IconNote ' },
  { name: <IconNote1 />, title: 'IconNote1 ' },
  { name: <IconNote2 />, title: 'IconNote2 ' },
  { name: <IconNote21 />, title: 'IconNote21 ' },
  { name: <IconNoteAdd />, title: 'IconNoteAdd ' },
  { name: <IconNoteFavorite />, title: 'IconNoteFavorite ' },
  { name: <IconNoteRemove />, title: 'IconNoteRemove ' },
  { name: <IconNoteSquare />, title: 'IconNoteSquare ' },
  { name: <IconNoteText />, title: 'IconNoteText ' },
  { name: <IconNotification />, title: 'IconNotification ' },
  { name: <IconNotification1 />, title: 'IconNotification1 ' },
  { name: <IconNotificationBing />, title: 'IconNotificationBing ' },
  { name: <IconNotificationCircle />, title: 'IconNotificationCircle ' },
  { name: <IconNotificationFavorite />, title: 'IconNotificationFavorite ' },
  { name: <IconNotificationStatus />, title: 'IconNotificationStatus ' },
  { name: <IconOmegaCircle />, title: 'IconOmegaCircle ' },
  { name: <IconOmegaSquare />, title: 'IconOmegaSquare ' },
  { name: <IconPaintbucket />, title: 'IconPaintbucket ' },
  { name: <IconPaperclip />, title: 'IconPaperclip ' },
  { name: <IconPaperclip2 />, title: 'IconPaperclip2 ' },
  { name: <IconPasswordCheck />, title: 'IconPasswordCheck ' },
  { name: <IconPath />, title: 'IconPath ' },
  { name: <IconPath2 />, title: 'IconPath2 ' },
  { name: <IconPathSquare />, title: 'IconPathSquare ' },
  { name: <IconPause />, title: 'IconPause ' },
  { name: <IconPauseCircle />, title: 'IconPauseCircle ' },
  { name: <IconPenAdd />, title: 'IconPenAdd ' },
  { name: <IconPenClose />, title: 'IconPenClose ' },
  { name: <IconPenRemove />, title: 'IconPenRemove ' },
  { name: <IconPenTool />, title: 'IconPenTool ' },
  { name: <IconPenTool2 />, title: 'IconPenTool2 ' },
  { name: <IconPeople />, title: 'IconPeople ' },
  { name: <IconPercentageCircle />, title: 'IconPercentageCircle ' },
  { name: <IconPercentageSquare />, title: 'IconPercentageSquare ' },
  { name: <IconPersonalcard />, title: 'IconPersonalcard ' },
  { name: <IconPet />, title: 'IconPet ' },
  { name: <IconPharagraphspacing />, title: 'IconPharagraphspacing ' },
  { name: <IconPictureFrame />, title: 'IconPictureFrame ' },
  { name: <IconPlay />, title: 'IconPlay ' },
  { name: <IconPlayAdd />, title: 'IconPlayAdd ' },
  { name: <IconPlayCircle />, title: 'IconPlayCircle ' },
  { name: <IconPlayCricle />, title: 'IconPlayCricle ' },
  { name: <IconPlayRemove />, title: 'IconPlayRemove ' },
  { name: <IconPresentionChart />, title: 'IconPresentionChart ' },
  { name: <IconPrevious />, title: 'IconPrevious ' },
  { name: <IconPrinter />, title: 'IconPrinter ' },
  { name: <IconPrinterSlash />, title: 'IconPrinterSlash ' },
  { name: <IconProfile2user />, title: 'IconProfile2user ' },
  { name: <IconProfileAdd />, title: 'IconProfileAdd ' },
  { name: <IconProfileCircle />, title: 'IconProfileCircle ' },
  { name: <IconProfileDelete />, title: 'IconProfileDelete ' },
  { name: <IconProfileRemove />, title: 'IconProfileRemove ' },
  { name: <IconProfileTick />, title: 'IconProfileTick ' },
  { name: <IconProgrammingArrow />, title: 'IconProgrammingArrow ' },
  { name: <IconProgrammingArrows />, title: 'IconProgrammingArrows ' },
  { name: <IconQuoteDown />, title: 'IconQuoteDown ' },
  { name: <IconQuoteDownCircle />, title: 'IconQuoteDownCircle ' },
  { name: <IconQuoteDownSquare />, title: 'IconQuoteDownSquare ' },
  { name: <IconQuoteUp />, title: 'IconQuoteUp ' },
  { name: <IconQuoteUpCircle />, title: 'IconQuoteUpCircle ' },
  { name: <IconQuoteUpSquare />, title: 'IconQuoteUpSquare ' },
  { name: <IconRadar />, title: 'IconRadar ' },
  { name: <IconRadar1 />, title: 'IconRadar1 ' },
  { name: <IconRadar2 />, title: 'IconRadar2 ' },
  { name: <IconRadio />, title: 'IconRadio ' },
  { name: <IconRam />, title: 'IconRam ' },
  { name: <IconRam2 />, title: 'IconRam2 ' },
  { name: <IconRanking />, title: 'IconRanking ' },
  { name: <IconRanking1 />, title: 'IconRanking1 ' },
  { name: <IconReceipt />, title: 'IconReceipt ' },
  { name: <IconReceipt1 />, title: 'IconReceipt1 ' },
  { name: <IconReceipt2 />, title: 'IconReceipt2 ' },
  { name: <IconReceipt21 />, title: 'IconReceipt21 ' },
  { name: <IconReceiptAdd />, title: 'IconReceiptAdd ' },
  { name: <IconReceiptDiscount />, title: 'IconReceiptDiscount ' },
  { name: <IconReceiptDisscount />, title: 'IconReceiptDisscount ' },
  { name: <IconReceiptEdit />, title: 'IconReceiptEdit ' },
  { name: <IconReceiptItem />, title: 'IconReceiptItem ' },
  { name: <IconReceiptMinus />, title: 'IconReceiptMinus ' },
  { name: <IconReceiptSearch />, title: 'IconReceiptSearch ' },
  { name: <IconReceiptSquare />, title: 'IconReceiptSquare ' },
  { name: <IconReceiptText />, title: 'IconReceiptText ' },
  { name: <IconReceived />, title: 'IconReceived ' },
  { name: <IconReceiveSquare />, title: 'IconReceiveSquare ' },
  { name: <IconReceiveSquare2 />, title: 'IconReceiveSquare2 ' },
  { name: <IconRecord />, title: 'IconRecord ' },
  { name: <IconRecordCircle />, title: 'IconRecordCircle ' },
  { name: <IconRecoveryConvert />, title: 'IconRecoveryConvert ' },
  { name: <IconRedo />, title: 'IconRedo ' },
  { name: <IconRefresh />, title: 'IconRefresh ' },
  { name: <IconRefresh2 />, title: 'IconRefresh2 ' },
  { name: <IconRefreshCircle />, title: 'IconRefreshCircle ' },
  { name: <IconRefreshLeftSquare />, title: 'IconRefreshLeftSquare ' },
  { name: <IconRefreshRightSquare />, title: 'IconRefreshRightSquare ' },
  { name: <IconRefreshSquare2 />, title: 'IconRefreshSquare2 ' },
  { name: <IconRepeat />, title: 'IconRepeat ' },
  { name: <IconRepeatCircle />, title: 'IconRepeatCircle ' },
  { name: <IconRepeateMusic />, title: 'IconRepeateMusic ' },
  { name: <IconRepeateOne />, title: 'IconRepeateOne ' },
  { name: <IconReserve />, title: 'IconReserve ' },
  { name: <IconRotateLeft />, title: 'IconRotateLeft ' },
  { name: <IconRotateLeft1 />, title: 'IconRotateLeft1 ' },
  { name: <IconRotateRight />, title: 'IconRotateRight ' },
  { name: <IconRotateRight1 />, title: 'IconRotateRight1 ' },
  { name: <IconRouteSquare />, title: 'IconRouteSquare ' },
  { name: <IconRouting />, title: 'IconRouting ' },
  { name: <IconRouting2 />, title: 'IconRouting2 ' },
  { name: <IconRowHorizontal />, title: 'IconRowHorizontal ' },
  { name: <IconRowVertical />, title: 'IconRowVertical ' },
  { name: <IconRuler />, title: 'IconRuler ' },
  { name: <IconRulerPen />, title: 'IconRulerPen ' },
  { name: <IconSafeHome />, title: 'IconSafeHome ' },
  { name: <IconSagittarius />, title: 'IconSagittarius ' },
  { name: <IconSave2 />, title: 'IconSave2 ' },
  { name: <IconSaveAdd />, title: 'IconSaveAdd ' },
  { name: <IconSaveMinus />, title: 'IconSaveMinus ' },
  { name: <IconSaveRemove />, title: 'IconSaveRemove ' },
  { name: <IconScan />, title: 'IconScan ' },
  { name: <IconScanBarcode />, title: 'IconScanBarcode ' },
  { name: <IconScanner />, title: 'IconScanner ' },
  { name: <IconScanning />, title: 'IconScanning ' },
  { name: <IconScissor />, title: 'IconScissor ' },
  { name: <IconScissor1 />, title: 'IconScissor1 ' },
  { name: <IconScreenmirroring />, title: 'IconScreenmirroring ' },
  { name: <IconScroll />, title: 'IconScroll ' },
  { name: <IconSearchFavorite />, title: 'IconSearchFavorite ' },
  { name: <IconSearchFavorite1 />, title: 'IconSearchFavorite1 ' },
  { name: <IconSearchNormal />, title: 'IconSearchNormal ' },
  { name: <IconSearchNormal1 />, title: 'IconSearchNormal1 ' },
  { name: <IconSearchStatus />, title: 'IconSearchStatus ' },
  { name: <IconSearchStatus1 />, title: 'IconSearchStatus1 ' },
  { name: <IconSearchZoomIn />, title: 'IconSearchZoomIn ' },
  { name: <IconSearchZoomIn1 />, title: 'IconSearchZoomIn1 ' },
  { name: <IconSearchZoomOut />, title: 'IconSearchZoomOut ' },
  { name: <IconSearchZoomOut1 />, title: 'IconSearchZoomOut1 ' },
  { name: <IconSecurity />, title: 'IconSecurity ' },
  { name: <IconSecurityCard />, title: 'IconSecurityCard ' },
  { name: <IconSecuritySafe />, title: 'IconSecuritySafe ' },
  { name: <IconSecurityTime />, title: 'IconSecurityTime ' },
  { name: <IconSecurityUser />, title: 'IconSecurityUser ' },
  { name: <IconSend />, title: 'IconSend ' },
  { name: <IconSend1 />, title: 'IconSend1 ' },
  { name: <IconSend2 />, title: 'IconSend2 ' },
  { name: <IconSendSqaure2 />, title: 'IconSendSqaure2 ' },
  { name: <IconSendSquare />, title: 'IconSendSquare ' },
  { name: <IconSetting />, title: 'IconSetting ' },
  { name: <IconSetting2 />, title: 'IconSetting2 ' },
  { name: <IconSetting3 />, title: 'IconSetting3 ' },
  { name: <IconSetting4 />, title: 'IconSetting4 ' },
  { name: <IconSetting5 />, title: 'IconSetting5 ' },
  { name: <IconSettings />, title: 'IconSettings ' },
  { name: <IconShapes />, title: 'IconShapes ' },
  { name: <IconShapes1 />, title: 'IconShapes1 ' },
  { name: <IconShare />, title: 'IconShare ' },
  { name: <IconShield />, title: 'IconShield ' },
  { name: <IconShieldCross />, title: 'IconShieldCross ' },
  { name: <IconShieldSearch />, title: 'IconShieldSearch ' },
  { name: <IconShieldSlash />, title: 'IconShieldSlash ' },
  { name: <IconShieldTick />, title: 'IconShieldTick ' },
  { name: <IconShip />, title: 'IconShip ' },
  { name: <IconShop />, title: 'IconShop ' },
  { name: <IconShopAdd />, title: 'IconShopAdd ' },
  { name: <IconShoppingBag />, title: 'IconShoppingBag ' },
  { name: <IconShoppingCart />, title: 'IconShoppingCart ' },
  { name: <IconShopRemove />, title: 'IconShopRemove ' },
  { name: <IconShuffle />, title: 'IconShuffle ' },
  { name: <IconSidebarBottom />, title: 'IconSidebarBottom ' },
  { name: <IconSidebarLeft />, title: 'IconSidebarLeft ' },
  { name: <IconSidebarRight />, title: 'IconSidebarRight ' },
  { name: <IconSidebarTop />, title: 'IconSidebarTop ' },
  { name: <IconSignpost />, title: 'IconSignpost ' },
  { name: <IconSimcard />, title: 'IconSimcard ' },
  { name: <IconSimcard1 />, title: 'IconSimcard1 ' },
  { name: <IconSimcard2 />, title: 'IconSimcard2 ' },
  { name: <IconSize />, title: 'IconSize ' },
  { name: <IconSlash />, title: 'IconSlash ' },
  { name: <IconSlider />, title: 'IconSlider ' },
  { name: <IconSliderHorizontal />, title: 'IconSliderHorizontal ' },
  { name: <IconSliderHorizontal1 />, title: 'IconSliderHorizontal1 ' },
  { name: <IconSliderVertical />, title: 'IconSliderVertical ' },
  { name: <IconSliderVertical1 />, title: 'IconSliderVertical1 ' },
  { name: <IconSmallcaps />, title: 'IconSmallcaps ' },
  { name: <IconSmartCar />, title: 'IconSmartCar ' },
  { name: <IconSmartHome />, title: 'IconSmartHome ' },
  { name: <IconSmileys />, title: 'IconSmileys ' },
  { name: <IconSms />, title: 'IconSms ' },
  { name: <IconSmsEdit />, title: 'IconSmsEdit ' },
  { name: <IconSmsNotification />, title: 'IconSmsNotification ' },
  { name: <IconSmsSearch />, title: 'IconSmsSearch ' },
  { name: <IconSmsStar />, title: 'IconSmsStar ' },
  { name: <IconSmsTracking />, title: 'IconSmsTracking ' },
  { name: <IconSort />, title: 'IconSort ' },
  { name: <IconSound />, title: 'IconSound ' },
  { name: <IconSpeaker />, title: 'IconSpeaker ' },
  { name: <IconSpeedometer />, title: 'IconSpeedometer ' },
  { name: <IconStar />, title: 'IconStar ' },
  { name: <IconStar1 />, title: 'IconStar1 ' },
  { name: <IconStarSlash />, title: 'IconStarSlash ' },
  { name: <IconStatus />, title: 'IconStatus ' },
  { name: <IconStatusUp />, title: 'IconStatusUp ' },
  { name: <IconSticker />, title: 'IconSticker ' },
  { name: <IconStickynote />, title: 'IconStickynote ' },
  { name: <IconStop />, title: 'IconStop ' },
  { name: <IconStopCircle />, title: 'IconStopCircle ' },
  { name: <IconStory />, title: 'IconStory ' },
  { name: <IconStrongbox />, title: 'IconStrongbox ' },
  { name: <IconStrongbox2 />, title: 'IconStrongbox2 ' },
  { name: <IconSubtitle />, title: 'IconSubtitle ' },
  { name: <IconSun />, title: 'IconSun ' },
  { name: <IconSun1 />, title: 'IconSun1 ' },
  { name: <IconSunFog />, title: 'IconSunFog ' },
  { name: <IconTag />, title: 'IconTag ' },
  { name: <IconTag2 />, title: 'IconTag2 ' },
  { name: <IconTagCross />, title: 'IconTagCross ' },
  { name: <TagPercent />, title: 'TagPercent ' },
  { name: <IconTagRight />, title: 'IconTagRight ' },
  { name: <IconTagUser />, title: 'IconTagUser ' },
  { name: <IconTask />, title: 'IconTask ' },
  { name: <IconTaskSquare />, title: 'IconTaskSquare ' },
  { name: <IconTeacher />, title: 'IconTeacher ' },
  { name: <IconText />, title: 'IconText ' },
  { name: <IconTextalignCenter />, title: 'IconTextalignCenter ' },
  {
    name: <IconTextalignJustifycenter />,
    title: 'IconTextalignJustifycenter ',
  },
  { name: <IconTextalignJustifyleft />, title: 'IconTextalignJustifyleft ' },
  {
    name: <IconTextalignJustifyright />,
    title: 'IconTextalignJustifyright ',
  },
  { name: <IconTextalignLeft />, title: 'IconTextalignLeft ' },
  { name: <IconTextalignRight />, title: 'IconTextalignRight ' },
  { name: <IconTextBlock />, title: 'IconTextBlock ' },
  { name: <IconTextBold />, title: 'IconTextBold ' },
  { name: <IconTextItalic />, title: 'IconTextItalic ' },
  { name: <IconTextUnderline />, title: 'IconTextUnderline ' },
  { name: <IconTickCircle />, title: 'IconTickCircle ' },
  { name: <IconTicket />, title: 'IconTicket ' },
  { name: <IconTicket2 />, title: 'IconTicket2 ' },
  { name: <IconTicketDiscount />, title: 'IconTicketDiscount ' },
  { name: <IconTicketExpired />, title: 'IconTicketExpired ' },
  { name: <IconTicketStar />, title: 'IconTicketStar ' },
  { name: <IconTickSquare />, title: 'IconTickSquare ' },
  { name: <IconTimer />, title: 'IconTimer ' },
  { name: <IconTimer1 />, title: 'IconTimer1 ' },
  { name: <IconTimerPause />, title: 'IconTimerPause ' },
  { name: <IconTimerStart />, title: 'IconTimerStart ' },
  { name: <IconToggleOff />, title: 'IconToggleOff ' },
  { name: <IconToggleOffCircle />, title: 'IconToggleOffCircle ' },
  { name: <IconToggleOn />, title: 'IconToggleOn ' },
  { name: <IconToggleOnCircle />, title: 'IconToggleOnCircle ' },
  { name: <IconTrade />, title: 'IconTrade ' },
  { name: <IconTransactionMinus />, title: 'IconTransactionMinus ' },
  { name: <IconTranslate />, title: 'IconTranslate ' },
  { name: <IconTrash />, title: 'IconTrash ' },
  { name: <IconTree />, title: 'IconTree ' },
  { name: <IconTrendDown />, title: 'IconTrendDown ' },
  { name: <IconTrendUp />, title: 'IconTrendUp ' },
  { name: <IconTriangle />, title: 'IconTriangle ' },
  { name: <IconTruck />, title: 'IconTruck ' },
  { name: <IconTruckFast />, title: 'IconTruckFast ' },
  { name: <IconTruckRemove />, title: 'IconTruckRemove ' },
  { name: <IconTruckTick />, title: 'IconTruckTick ' },
  { name: <IconTruckTime />, title: 'IconTruckTime ' },
  { name: <IconTrushSquare />, title: 'IconTrushSquare ' },
  { name: <IconUndo />, title: 'IconUndo ' },
  { name: <IconUnlimited />, title: 'IconUnlimited ' },
  { name: <IconUnlock />, title: 'IconUnlock ' },
  { name: <IconUser />, title: 'IconUser ' },
  { name: <IconUserAdd />, title: 'IconUserAdd ' },
  { name: <IconUserCirlceAdd />, title: 'IconUserCirlceAdd ' },
  { name: <IconUserEdit />, title: 'IconUserEdit ' },
  { name: <IconUserHeart />, title: 'IconUserHeart ' },
  { name: <IconUserMinus />, title: 'IconUserMinus ' },
  { name: <IconUserOctagon />, title: 'IconUserOctagon ' },
  { name: <IconUserRemove />, title: 'IconUserRemove ' },
  { name: <IconUserSearch />, title: 'IconUserSearch ' },
  { name: <IconUserSquare />, title: 'IconUserSquare ' },
  { name: <IconUserTag />, title: 'IconUserTag ' },
  { name: <IconUserTick />, title: 'IconUserTick ' },
  { name: <IconVerify />, title: 'IconVerify ' },
  { name: <IconVideo />, title: 'IconVideo ' },
  { name: <IconVideoAdd />, title: 'IconVideoAdd ' },
  { name: <IconVideoCircle />, title: 'IconVideoCircle ' },
  { name: <IconVideoHorizontal />, title: 'IconVideoHorizontal ' },
  { name: <IconVideoOctagon />, title: 'IconVideoOctagon ' },
  { name: <IconVideoPlay />, title: 'IconVideoPlay ' },
  { name: <IconVideoRemove />, title: 'IconVideoRemove ' },
  { name: <IconVideoSlash />, title: 'IconVideoSlash ' },
  { name: <IconVideoSquare />, title: 'IconVideoSquare ' },
  { name: <IconVideoTick />, title: 'IconVideoTick ' },
  { name: <IconVideoTime />, title: 'IconVideoTime ' },
  { name: <IconVideoVertical />, title: 'IconVideoVertical ' },
  { name: <IconVoiceCricle />, title: 'IconVoiceCricle ' },
  { name: <IconVoiceSquare />, title: 'IconVoiceSquare ' },
  { name: <IconVolumeCross />, title: 'IconVolumeCross ' },
  { name: <IconVolumeHigh />, title: 'IconVolumeHigh ' },
  { name: <IconVolumeLow />, title: 'IconVolumeLow ' },
  { name: <IconVolumeLow1 />, title: 'IconVolumeLow1 ' },
  { name: <IconVolumeMute />, title: 'IconVolumeMute ' },
  { name: <IconVolumeSlash />, title: 'IconVolumeSlash ' },
  { name: <IconVolumeUp />, title: 'IconVolumeUp ' },
  { name: <IconWallet />, title: 'IconWallet ' },
  { name: <IconWallet1 />, title: 'IconWallet1 ' },
  { name: <IconWallet2 />, title: 'IconWallet2 ' },
  { name: <IconWallet3 />, title: 'IconWallet3 ' },
  { name: <IconWalletAdd />, title: 'IconWalletAdd ' },
  { name: <IconWalletAdd1 />, title: 'IconWalletAdd1 ' },
  { name: <IconWalletCheck />, title: 'IconWalletCheck ' },
  { name: <IconWalletMinus />, title: 'IconWalletMinus ' },
  { name: <IconWalletMoney />, title: 'IconWalletMoney ' },
  { name: <IconWalletRemove />, title: 'IconWalletRemove ' },
  { name: <IconWalletSearch />, title: 'IconWalletSearch ' },
  { name: <IconWarning2 />, title: 'IconWarning2 ' },
  { name: <IconWatch />, title: 'IconWatch ' },
  { name: <IconWatchStatus />, title: 'IconWatchStatus ' },
  { name: <IconWeight />, title: 'IconWeight ' },
  { name: <IconWeight1 />, title: 'IconWeight1 ' },
  { name: <IconWifi />, title: 'IconWifi ' },
  { name: <IconWifiSquare />, title: 'IconWifiSquare ' },
  { name: <IconWind />, title: 'IconWind ' },
  { name: <IconWind2 />, title: 'IconWind2 ' },
  { name: <IconWoman />, title: 'IconWoman ' },
]
export const ListIcons = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [open, setOpen] = useState<any>(false)

  const filteredIcons = list.filter((icon) =>
    icon.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ my: 2 }}>
          <input
            type="text"
            placeholder="Buscar ícone"
            value={searchTerm}
            style={{ width: '100%', height: '40px' }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <Snackbar
            open={!!open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
            message={`Copiado <${open} />`}
          />
          {filteredIcons.map((data) => {
            return (
              <Box
              
                sx={{
                  borderRadius: '10px',
                  background: '#e4e4e4',
                  width: '15%',
                  flexDirection: 'row',
                  p: 1,
                }}
                key={data.title}
              >
                <Box sx={{ textAlign: 'center' }}> {data.title}</Box>
                <Box sx={{ textAlign: 'center' }}> {data.name}</Box>
                <Box sx={{ textAlign: 'center', display:'flex',  width:'100%', justifyContent:'space-between' }}>
                <Box sx={{ textAlign: 'center', background:'#676767', color:'#fff', padding:'3px', borderRadius:'6px',cursor:'pointer' }}   
                onClick={() => {
                  setOpen(data.title)
                  navigator.clipboard.writeText(`<${data.title} />`)
                }}> Copy</Box>
                <Box sx={{ textAlign: 'center', background:'#676767', color:'#fff', padding:'3px', borderRadius:'6px', cursor:'pointer' }}
                  onClick={() => {
                    var svgData = data.name;
                    const svgString = ReactDOMServer.renderToStaticMarkup(svgData);
                    var svgBlob = new Blob([svgString], {type:"image/svg+xml;charset=utf-8"});
                    var svgUrl = URL.createObjectURL(svgBlob);
                    var downloadLink = document.createElement("a");
                    downloadLink.href = svgUrl;
                    downloadLink.download = `${data.title.trim()}.svg`;
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                    console.log(svgData)
                    // setOpen(data.title)
                    // navigator.clipboard.writeText(`<${data.title} />`)
                  }}> SVG</Box>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </>
  )
}
