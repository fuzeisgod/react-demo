1. 不管你是要配置什么，我们最好的方式是使用`react-app-rewired`这个包来对`cra`创建的项目进行轻微的配置调整。

2. 安装好之后，在`package.json`里把`scripts`里的`react-scripts`替换成`react-app-rewired`

3. 在根目录下创建一个`config-overrides.js`

   ```js
   module.exports = (config) => {
   	// 在这里去做配置
   	return config
   }
   ```

4. 当然如果想要配置更方便，可以再安装`customize-cra`，然后把`config-overrides.js`改成这样

   ```js
   const { override, addDecoratorsLegacy } = require('customize-cra')
   module.exports = override(
   	addDecoratorsLegacy()
   )
   ```

   

