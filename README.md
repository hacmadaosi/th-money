## Khởi tạo dự án Expo

1. Bước 1: Khởi tạo dự án Expo mới

   ```bash
   npx create-expo-app@latest MyWebProject
   cd MyWebProject
   ```
2. Bước 2: Thêm hỗ trợ Web

   ```bash
   npx expo install react-dom react-native-web @expo/metro-runtime
   ```

3. Bước 3: Chạy dự án trên Web

   ```bash
   npm run web
   ```

## Dọn dẹp toàn bộ các file source code mẫu

``` bash
npm run reset-project
```