import "normalize.css";
import "./global.less";

import 'antd/dist/antd.css';
import { isMobile } from "./utils/tool";

// 处理控制台
if (window && "eruda" in window && isMobile(window.navigator.userAgent)) {
  window.eruda.init()
}
