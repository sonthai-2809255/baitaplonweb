document.addEventListener('DOMContentLoaded', () => {
    const cars = {
        k1: {
            name: "Toyota Camry",
            price: "1.200.000.000 VND",
            year: "2014",
            power: "Xăng",
            km: "44000km",
            seat: "6",
            hs: "tự động",
            description: "🚗 KIA SEDONA 2.2L DATH 2019 FULL DẦU CAO CẤP 🚗<br>" +
                "<br>⭐️ Xe gia đình, 7 chỗ cao cấp, rộng rãi, sang trọng, tiện nghi<br>" +
                "⭐️ Động cơ Diesel - Hộp số tự động 8 cấp<br>" +
                "🔹 Xe màu Trắng - Nội thất Kem<br>" +
                "🔹 Sản xuất 2019<br>" +
                "🔹 ODO: 44.000km<br>" +
                "<br><br>✨️ Trang bị options: Hệ thống đèn full LED, Ghế chỉnh điện bọc da cao cấp, Nhớ ghế 2 vị trí, Phanh tay điện tử, Sưởi ghế và vô lăng, Sạc không dây chuẩn Qi, Điều hòa tự động độc lập 3 vùng có lọc khí i-on, 2 cửa sổ trời, Cốp điện tự động, 6 túi khí, Camera và cảm biến lùi...<br>" +
                "<br>✨️ Trang bị thêm: Film cách nhiệt, Thảm lót sàn,...<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "KIA",
            model: "Sedona Platinum",
            version: "DATH D",
            origin: "Quốc tế",
            yearover: "2014",
            seatover: "6",
            hsover: "tự động",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Xăng",
            cd: "5115",
            cr: "1985",
            cc: "1755",
            bx: "3060",
            kl: "2070",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/car1.jpg",
                "images2/car2.jpg",
                "images2/car3.jpg",
                "images2/car4.jpg",
                "images2/car5.jpg",
                "images2/car6.jpg",
                "images2/car7.jpg"
            ]
        },
        k2: {
            name: "Hyundai santafe 2.2D htrac premium full options desel",
            price: "909.000.000 VND",
            year: "2019",
            power: "Dầu",
            km: "50000km",
            seat: "5",
            hs: "tự động",
            description: "🚗 HYUNDAI SANTAFE 2.2D HTRAC Premium Full Options Diesel<br>" +
                "<br>⭐️ Xe gia đình, 7 chổ, Gầm cao, Hiện đại" +
                "⭐️ Động cơ dầu 2.2 - Hộp số tự động 8 cấp<br>" +
                "🔹 Màu Đỏ/nội thất nâu<br>" +
                "🔹 Sản xuất: 2019<br>" +
                "🔹 ODO: 5v<br>" +
                "<br><br>✨️  Trang bị Options: Đèn full led, 4 chế độ lái, 6 loa, 6 túi khí, Sạc không dây, Cửa sổ trời toàn cảnh Panorama, Hàng ghế trước chỉnh điện kèm sưởi và thông gió, Nhớ 2 vị trí ghế lái, Màn hình giải trí 8 inch hổ trợ kết nối điện thoại, Camera lùi,  Cảm biến lùi, lẫy chuyển số trên vô lăng, Mâm 19 inch, Hiển thị thông tin trên kính lái HUD,... br>" +
                "<br>✨️ Phụ kiện thêm gồm có: Dán phim cách nhiệt, thảm lót sàn,…<br>" +
                "<br>🔥Cam kết không đâm đụng, không ngập nước, không tua km<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Hyundai",
            model: "Santa Fe",
            version: "2.2 4WD",
            origin: "Trong nước",
            yearover: "2019",
            seatover: "5",
            hsover: "tự động",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "4690",
            cr: "1880",
            cc: "1680",
            bx: "2700",
            kl: "1831",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k2/c1.webp",
                "images2/k2/c2.webp",
                "images2/k2/c3.webp",
                "images2/k2/c4.webp",
                "images2/k2/c5.webp",
                "images2/k2/c6.webp",
                "images2/k2/c7.webp"
            ]
        },
        k3: {
            name: "Hyundai santafe 2.2D full options siêu lướt 2022",
            price: "1.199.000.000 VND",
            year: "2022",
            power: "Dầu",
            km: "34000km",
            seat: "7",
            hs: "tự động",
            description: "🚗 𝐇𝐲𝐮𝐧𝐝𝐚𝐢 𝐒𝐚𝐧𝐭𝐚𝐟𝐞 𝟐.𝟐𝐃 𝟒𝐱𝟒 𝟐𝟎𝟐𝟐 𝐝𝐚̂̀𝐮 𝐜𝐚𝐨 𝐜𝐚̂́𝐩 𝐅𝐮𝐥𝐥 𝐎𝐩𝐭𝐢𝐨𝐧𝐬 🚗<br>" +
                "<br>🌟 Xe gia đình, 7 chỗ, gầm cao, tiện nghi, hiện đại<br>" +
                "🌟 Động cơ dầu 2.2L - Hộp số tự động 8 cấp, dẫn động 2 cầu thông minh<br>" +
                "🔹 Màu Đen/nội thất nâu<br>" +
                "🔹 Sản xuất 2022<br>" +
                "🔹 ODO: 3.5v<br>" +
                "<br><br>✨️ Trang bị Options: Đèn Full Led, mâm 19 inch, 4 chế độ lái, hàng ghế phía trước chỉnh điện 2 vị trí nhớ tích hợp sưởi ghế, sưởi vô lăng, Màn hình giải trí 10.25 inch hổ trợ kết nối điện thoại thông minh, bảng đồ dẫn đường, Hệ thống âm thanh 10 loa Harman-Cardon cao cấp, Sạc không dây, cửa số trời toàn cảnh Panorama, 6 túi khí, Camera 360, khởi động từ xa,...<br>" +
                "<br>✨️Trang bị thêm: Film cách nhiệt, thảm lót sàn,…<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Hyundai",
            model: "Santa Fe",
            version: "2.2 4WD",
            origin: "Trong nước",
            yearover: "2022",
            seatover: "7",
            hsover: "tự động",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "4690",
            cr: "1880",
            cc: "1680",
            bx: "2700",
            kl: "1831",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k3/c1.webp",
                "images2/k3/c2.webp",
                "images2/k3/c3.webp",
                "images2/k3/c4.webp",
                "images2/k3/c5.webp"
            ]
        },
        k4: {
            name: "Ford Tourneo 2021 Titanium D - Car Limousine",
            price: "799.000.000 VND",
            year: "2021",
            power: "Dầu",
            km: "50000km",
            seat: "5",
            hs: "tự động",
            description: "🚗 𝐅𝐨𝐫𝐝 𝐓𝐨𝐮𝐫𝐧𝐞𝐨 𝟐𝟎𝟐𝟏 𝐓𝐢𝐭𝐚𝐧𝐢𝐮𝐦 𝐃- 𝐂𝐚𝐫 𝐋𝐢𝐦𝐨𝐮𝐬𝐢𝐧𝐞 <br>" +
                "<br>🚨 Phiên bản Limited chỉ có 99 chiếc<br>" +
                "🚨 Động cơ xăng 2.0L EcoBoost  - Hộp số tự động 6 cấpp<br>" +
                "💎 Xe màu Trắng - Nội thất Nâu <br>" +
                "💎 Sản xuất 2019<br>" +
                "💎 ODO: 43.000km<br>" +
                "<br><br>✨️ Trang bị options: Hệ thống đèn full LED, Ghế chỉnh điện bọc da cao cấp, Nhớ ghế 2 vị trí, Phanh tay điện tử, Sưởi ghế và vô lăng, Sạc không dây chuẩn Qi, Điều hòa tự động độc lập 3 vùng có lọc khí i-on, 2 cửa sổ trời, Cốp điện tự động, 6 túi khí, Camera và cảm biến lùi...<br>" +
                "<br>✨️ Trang bị thêm: Film cách nhiệt, Thảm lót sàn,...<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Ford",
            model: "Transit",
            version: "2.2 4WD",
            origin: "Trong nước",
            yearover: "2021",
            seatover: "5",
            hsover: "tự động",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "4690",
            cr: "1880",
            cc: "1680",
            bx: "2700",
            kl: "1831",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k4/c1.webp",
                "images2/k4/c2.webp",
                "images2/k4/c3.webp",
                "images2/k4/c4.webp",
                "images2/k4/c5.webp",
                "images2/k4/c6.webp"
            ]
        },
        k5: {
            name: "Xe Ford Escape 3.0 V6 2001 Đen xe ngon máy êm",
            price: "85.000.000 VND",
            year: "2001",
            power: "Xăng",
            km: "267000km",
            seat: "5",
            hs: "tự động",
            description: "🚗 Xe Ford Escape 3.0 V6 2001 Đen xe ngon máy êm 🚗<br>" +
                "<br>⭐️ - Xe động cơ hoạt động tốt về chỉ việc đi<br>" +
                "⭐️ - Đã lắp màn hình android có cam sau<br>" +
                "🔹 - ĐIều hòa mát, lốp mới, gầm cao máy thoáng thích hợp mọi địa hình<br>" +
                "🔹 - Xe xăng số tự động dễ đi, phù hợp cho đi lại trong thành phố về quê, người đang tập lái, mới lấy bằng<br>" +
                "🔹- Xe cá nhân đang đi do nhu cầu lên đời xe bán cho bác nào cần, uy tín chân thành.<br>" +
                "<br><br>✨️ Trang bị options: Hệ thống đèn full LED, Ghế chỉnh điện bọc da cao cấp, Nhớ ghế 2 vị trí, Phanh tay điện tử, Sưởi ghế và vô lăng, Sạc không dây chuẩn Qi, Điều hòa tự động độc lập 3 vùng có lọc khí i-on, 2 cửa sổ trời, Cốp điện tự động, 6 túi khí, Camera và cảm biến lùi...<br>" +
                "<br>✨️ Trang bị thêm: Film cách nhiệt, Thảm lót sàn,...<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Ford",
            model: "Escape",
            version: "XLT 3.0 AT 4x4",
            origin: "Trong nước",
            yearover: "2001",
            seatover: "5",
            hsover: "tự động",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "4475",
            cr: "1825",
            cc: "1770",
            bx: "2620",
            kl: "1610",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k5/c1.webp",
                "images2/k5/c2.webp",
                "images2/k5/c3.webp",
                "images2/k5/c4.webp",
                "images2/k5/c5.webp"
            ]
        },
        k6: {
            name: "Suzuki Jumny 2024",
            price: "850.000.000 VND",
            year: "2024",
            power: "Xăng",
            km: "Xe mới",
            seat: "5",
            hs: "Số sàn",
            description: "🚗 Suzuki Jumny 2024<br>" +
                "<br>⭐️ Xe gia đình, 5 chỗ cao cấp, rộng rãi, sang trọng, tiện nghi<br>" +
                "⭐️ Động cơ Diesel - Hộp số tự động 8 cấp<br>" +
                "🔹 Xe màu Trắng - Nội thất Kem<br>" +
                "🔹 Sản xuất 2019<br>" +
                "🔹 ODO: 44.000km<br>" +
                "<br><br>✨️ Trang bị options: Hệ thống đèn full LED, Ghế chỉnh điện bọc da cao cấp, Nhớ ghế 2 vị trí, Phanh tay điện tử, Sưởi ghế và vô lăng, Sạc không dây chuẩn Qi, Điều hòa tự động độc lập 3 vùng có lọc khí i-on, 2 cửa sổ trời, Cốp điện tự động, 6 túi khí, Camera và cảm biến lùi...<br>" +
                "<br>✨️ Trang bị thêm: Film cách nhiệt, Thảm lót sàn,...<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Suzuki",
            model: "Jimny",
            version: "2.2 4WD",
            origin: "Trong nước",
            yearover: "2019",
            seatover: "5",
            hsover: "số sàn",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "4690",
            cr: "1880",
            cc: "1680",
            bx: "2700",
            kl: "1831",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k6/c1.webp",
                "images2/k6/c2.webp"
            ]
        },
        k7: {
            name: "BMW 330i 2024",
            price: "1.989.000.000 VND",
            year: "2024",
            power: "Xăng",
            km: "Xe mới",
            seat: "5",
            hs: "số sàn",
            description: "Dài x Rộng x Cao: 4713 x 1827 x 1440. Chiều dài cơ sở: 2851. Động cơ: Xăng; I4; 1998 cc; TwinPower Turbo. Công suất cực đại: 258 @ 5000 - 6000. Dẫn động: Cầu sau. Hộp số: Tự động 8 cấp Steptronic.<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "BMW",
            model: "330i",
            version: "2.2 4WD",
            origin: "Trong nước",
            yearover: "2024",
            seatover: "5",
            hsover: "số sàn",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "4690",
            cr: "1880",
            cc: "1680",
            bx: "2700",
            kl: "1831",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k7/c1.jpeg",
                "images2/k7/c2.jpeg",
                "images2/k7/c3.webp",
                "images2/k7/c4.webp"
            ]
        },    
        k8: {
            name: "Vinfast VF6 2024",
            price: "675.000.000 VND",
            year: "2024",
            power: "Điện",
            km: "Xe mới",
            seat: "5",
            hs: "tự động",
            description: "VinFast VF6 2024. Bán VinFast VF6 2024 tại Hà Nội. VF 6 sở hữu: - Động cơ mạnh mẽ với công suất 150 kW ~ 201 mã lực. - Mô-men xoắn cực đại lên đến 310 Nm. - Mang đến trải nghiệm lái xe đẳng cấp vượt trội. Làm việc trực tiếp với Em Ngọc quý khách hàng tối đa nhận các quyền lợi: - Nhận xe giá ưu đãi. - Ưu đãi tặng 50% thuế trước bạ, lên tới 53 triệu đồng. - Tặng 10 triệu: Tương ứng 10.000 điểm vào tài khoản VinClub sau khi mua xe. - Sạc pin miễn phí tại các trạm sạc V-GREEN đến hết 01/07/2025. - Hỗ trợ ra biển, mọi thủ tục hành chính giấy tờ, giao xe tận nơi. - Thủ tục trả góp trọn gói. - Hỗ trợ trả góp lãi suất ưu đãi. - Hồ sơ đơn giản, giải ngân nhanh chóng. Liên hệ hotline Mr Ngọc 0902463666 (Call/zalo) để được hỗ trợ thông tin. Đăng ký trải nghiệm VF 6 ngay hôm nay để tận hưởng lợi ích khác biệt. Vinfast Hà Nội hân hạnh phục vị quý khách hàng!!<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Vinfast",
            model: "VF6",
            version: "2.2 4WD",
            origin: "Trong nước",
            yearover: "2024",
            seatover: "5",
            hsover: "tự động",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun điện",
            powerover: "Điện",
            cd: "4690",
            cr: "1880",
            cc: "1680",
            bx: "2700",
            kl: "1831",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k8/c1.webp",
                "images2/k8/c2.webp",
                "images2/k8/c3.webp",
                "images2/k8/c4.webp",
                "images2/k8/c5.webp",
                "images2/k8/c6.webp"
            ]
        },
        k9: {
            name: "Kia Sedona 2.2 DATH 2018",
            price: "879.000.000 VND",
            year: "2019",
            power: "xăng",
            km: "44000km",
            seat: "7",
            hs: "tự động",
            description: "🚗 Kia Sedona 2.2 DATH 2018 🚗<br>" +
                "<br>+ Kia Sedona DATH, bản full máy dầu, chất xe cực đẹp chủ đi kỹ, một trong những chiếc xe Sedona đẹp nhất showroom em từ trước đến nay. ️+ sản xuất 2018. ️+ odo chuẩn 68.000km. +️ Xe màu Trắng / nội thất be. Giá còn thương lượng ạ. Anh chị quan tâm liên hệ em, em hỗ trợ nhiệt tình 24/24, có nhận trao đổi xe bù trừ thương lượng mức giá hợp lý ạ, có chính sách hậu mãi và quà tặng đi kèm. CAM KẾT XE: - KHÔNG đâm đụng. - KHÔNG ngập nước. - KHÔNG tua km. - Động cơ, hộp số nguyên zin. Chân thành cảm ơn quý anh chị đã xem tin!<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Hyundai",
            model: "Santa Fe",
            version: "DATH D",
            origin: "Quốc tế",
            yearover: "2019",
            seatover: "5",
            hsover: "tự động",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "5115",
            cr: "1985",
            cc: "1755",
            bx: "3036",
            kl: "2070",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k9/c1.webp",
                "images2/k9/c2.webp",
                "images2/k9/c3.webp",
                "images2/k9/c4.webp",
                "images2/k9/c5.webp",
                "images2/k9/c6.webp"
            ]
        },
        k10: {
            name: "Mercedes-Benz C300 2024",
            price: "1.818.000.000 VND",
            year: "2024",
            power: "Xăng",
            km: "Xe mới",
            seat: "5",
            hs: "Số sàn",
            description: "🚗 Mercedes-Benz C300 2024 🚗<br>" +
                "<br>U ĐÃI ĐẶC BIỆT KHI MUA MERCEDES-BENZ NGAY HÔM NAY! - (HOT) Ưu đãi giảm giá sâu lên tới 280 TRIỆU. - Giảm 50% lệ phí trước bạ. - Hỗ trợ mua xe trả góp đến 85%, thời gian vay mua xe tối đa lên đến 8 năm, lãi suất chỉ từ 0.5%. - Tặng gói phụ kiện chính hãng lên đến 50 triệu (dán film cách nhiệt, phủ ceramic, thảm trải sàn). - Tặng bảo hiểm thân vỏ. - Bảo dưỡng miễn phí. - Quà tặng chính hãng đến từ Mercedes-benz Việt Nam (Ô, áo, mũ, gấu,... ). - Lái thử xe, sẵn xe đủ màu giao ngay, hỗ trợ giao xe tận nhà. - Bảo hành 3 năm trên Toàn Quốc. Ưu đãi còn tốt hợn nữa khi khách liên hệ em Phúc Bùi Mercedes. Hotline liên hệ: 092 707 3388(call/zalo).<br>" +
                "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
                "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
            manufacturer: "Mercedes-Benz",
            model: "C300",
            version: "2.2 4WD",
            origin: "Trong nước",
            yearover: "2024",
            seatover: "5",
            hsover: "Số sàn",
            engine: "2.2",
            dd: "4x2",
            ldc: "Dầu I4 2.2 CRDi",
            htpx: "Phun dầu trực tiếp (Common Rail DI-D)",
            powerover: "Dầu",
            cd: "4690",
            cr: "1880",
            cc: "1680",
            bx: "2700",
            kl: "1831",
            l: "80",
            pt: "Đĩa thông gió",
            ps: "Đĩa đặc",
            images: [
                "images2/k10/c1.webp",
                "images2/k10/c2.webp",
                "images2/k10/c3.webp",
                "images2/k10/c4.webp",
                "images2/k10/c5.webp",
                "images2/k10/c6.webp"
            ]
        },
    };

    // Lấy tham số car từ URL
    const params = new URLSearchParams(window.location.search);
    const carKey = params.get('car');
    let currentIndex = 0; // Biến để theo dõi chỉ số ảnh hiện tại
    if (carKey && cars[carKey]) {
        const car = cars[carKey];

        // Hiển thị thông tin xe
        document.getElementById('car-title').innerText = car.name;
        document.getElementById('car-price').innerText = car.price;
        document.getElementById('car-year').innerText = car.year;
        document.getElementById('car-power').innerText = car.power || '';
        document.getElementById('car-km').innerText = car.km || '';
        document.getElementById('car-seat').innerText = car.seat || '';
        document.getElementById('car-hs').innerText = car.hs || '';
        document.getElementById('car-description').innerHTML = car.description || '';
        document.getElementById('car-manufacturer').innerText = car.manufacturer || '';
        document.getElementById('car-model').innerText = car.model || '';
        document.getElementById('car-version').innerText = car.version || '';
        document.getElementById('car-yearover').innerText = car.yearover || '';
        document.getElementById('car-origin').innerText = car.origin || '';
        document.getElementById('car-engine').innerText = car.engine || '';
        document.getElementById('car-dd').innerText = car.dd || '';
        document.getElementById('car-ldc').innerText = car.ldc || '';
        document.getElementById('car-htpx').innerText = car.htpx || '';
        document.getElementById('car-cd').innerText = car.cd || '';
        document.getElementById('car-cr').innerText = car.cr || '';
        document.getElementById('car-cc').innerText = car.cc || '';
        document.getElementById('car-bx').innerText = car.bx || '';
        document.getElementById('car-kl').innerText = car.kl || '';
        document.getElementById('car-l').innerText = car.l || '';
        document.getElementById('car-pt').innerText = car.pt || '';
        document.getElementById('car-ps').innerText = car.ps || '';
        document.getElementById('car-seatover').innerText = car.seatover || '';
        document.getElementById('car-powerover').innerText = car.powerover || '';
        document.getElementById('car-hsover').innerText = car.hsover || '';

        // Hiển thị ảnh lớn đầu tiên
        document.getElementById('large-image').src = car.images[0];

        // Hiển thị ảnh nhỏ
        const thumbnailContainer = document.querySelector('.thumbnail-images');
        car.images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.className = 'thumbnail';
            imgElement.src = image;
            imgElement.alt = `Ảnh nhỏ ${index + 1}`;
            imgElement.onclick = () => changeImage(image);
            thumbnailContainer.appendChild(imgElement);
        });
        // Hàm chuyển đến ảnh trước
        window.prevImage = function() {
            currentIndex = (currentIndex - 1 + car.images.length) % car.images.length; // Chuyển đến ảnh trước
            document.getElementById('large-image').src = car.images[currentIndex]; // Cập nhật ảnh lớn
        };

        // Hàm chuyển đến ảnh tiếp theo
        window.nextImage = function() {
            currentIndex = (currentIndex + 1) % car.images.length; // Chuyển đến ảnh tiếp theo
            document.getElementById('large-image').src = car.images[currentIndex]; // Cập nhật ảnh lớn
        };
    }

    // Hàm thay đổi hình ảnh lớn
    function changeImage(imageSrc) {
        document.getElementById('large-image').src = imageSrc;
    }

    // Hàm thu gọn và mở rộng mô tả
    function toggleDescription() {
        const descriptionElement = document.getElementById('car-description');
        const toggleButton = document.getElementById('toggle-description');
        
        descriptionElement.classList.toggle('expanded');
        toggleButton.innerText = descriptionElement.classList.contains('expanded') ? "Thu gọn" : "Xem thêm";
    }

    // Hàm thu gọn và mở rộng thông số kĩ thuật
    function toggleParameter() {
        const parameterElement = document.getElementById('car-parameter');
        const toggleButton = document.getElementById('toggle-parameter');
        
        parameterElement.classList.toggle('expanded');
        toggleButton.innerText = parameterElement.classList.contains('expanded') ? "Thu gọn" : "Xem thêm";
    }

    // Gán sự kiện cho nút "Xem thêm" mô tả
    document.getElementById('toggle-description').addEventListener('click', toggleDescription);

    // Gán sự kiện cho nút "Xem thêm" thông số
    document.getElementById('toggle-parameter').addEventListener('click', toggleParameter);
});
// thiết lập validate bỏ trống
function validateSearch(){
    const searchinput=document.getElementById('Search').value.trim();
    if(searchinput ==="") {
      alert("bạn chưa nhập thông tin");
      return false;
    }
    return true;
  }