"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Enable CORS
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    });
    await app.listen(3005);
    console.log('Application is running on: http://localhost:3005');
}
bootstrap();
//# sourceMappingURL=main.js.map