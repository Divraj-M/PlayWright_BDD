import { LaunchOptions,chromium,firefox,webkit } from "playwright";
const headlessMode = process.env.npm_config_HEAD === "true"?true:false;

const options:LaunchOptions = {
    headless: headlessMode
}
export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || 'chrome';
    switch (browserType) {
        case 'chrome':
            return chromium.launch(options);    
        case 'firefox':
            return firefox.launch(options);
        case 'webkit':
            return webkit.launch(options);
        default:
            throw new Error("please set the Proper Browser");    
        
    }
}