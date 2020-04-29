import { ImageRequireSource } from "react-native";

const images = {
    iconNavBar: require("./Icon_navbar_Logo.png") as ImageRequireSource,

    articleBackground: require("./background_article_header.png") as ImageRequireSource,
    
    iconNavSearch: require("./icons/Icon_navbar_Search.png") as ImageRequireSource,
    iconNavMenu: require("./icons/Icon_navbar_Menu.png") as ImageRequireSource,
    iconNavClose:  require("./icons/icon_navbar_close.png") as ImageRequireSource,
    
    thumbnails: {
        environment: require("./thumbnails/Thumbnail_channel_Environment.png") as ImageRequireSource,
        entertainment: require("./thumbnails/Thumbnail_channel_Entertainment.png") as ImageRequireSource,
        science: require("./thumbnails/Thumbnail_channel_Science.png") as ImageRequireSource,
        auto: require("./thumbnails/Thumbnail_channel_Auto.png") as ImageRequireSource,
        travel: require("./thumbnails/Thumbnail_channel_Travel.png") as ImageRequireSource,
        finance: require("./thumbnails/Thumbnail_channel_Finance.png") as ImageRequireSource,
        fashion: require("./thumbnails/Thumbnail_channel_Fashion.png") as ImageRequireSource,
        technology: require("./thumbnails/Thumbnail_channel_Technology.png") as ImageRequireSource,
    }
}

export default images;