const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const sourceDir = path.join(__dirname, "..", "original-backgrounds");
const outputDir = path.join(
    __dirname,
    "..",
    "source",
    "images",
    "backgrounds"
);

const extensions = [".jpg", ".jpeg", ".png"];

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function convertImages() {
    for (let i = 1; i <= 25; i++) {
        let inputFile = null;

        for (const ext of extensions) {
            const candidate = path.join(sourceDir, `${i}${ext}`);

            if (fs.existsSync(candidate)) {
                inputFile = candidate;
                break;
            }
        }

        if (!inputFile) {
            console.log(`跳過：找不到圖片 ${i}`);
            continue;
        }

        const outputFile = path.join(outputDir, `${i}.webp`);

        const inputStat = fs.statSync(inputFile);

        if (fs.existsSync(outputFile)) {
            const outputStat = fs.statSync(outputFile);

            if (outputStat.mtimeMs >= inputStat.mtimeMs) {
                console.log(`跳過：${path.basename(inputFile)} 沒有變更`);
                continue;
            }
        }

        const originalSize = inputStat.size;

        await sharp(inputFile)
            .resize({
                width: 1920,
                withoutEnlargement: true
            })
            .webp({
                quality: 80
            })
            .toFile(outputFile);

        const newSize = fs.statSync(outputFile).size;

        console.log(
            `已轉換：${path.basename(inputFile)} -> ${i}.webp | ` +
            `${(originalSize / 1024 / 1024).toFixed(2)} MB -> ` +
            `${(newSize / 1024 / 1024).toFixed(2)} MB`
        );
    }

    console.log("\n背景圖片檢查完成！");
}

convertImages().catch((error) => {
    console.error("轉換失敗：", error);
});