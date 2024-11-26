// build.js
import esbuild from "esbuild";
// 공통으로 사용할 옵션들
// https://esbuild.github.io/api/#build 에서 다양한 옵션들을 확인할 수 있다.
const baseConfig = {
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
};

const buildCjs = () => {
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  });
};

const buildEsm = () => {
  esbuild.build({
    ...baseConfig,
    format: "esm",
  });
};

Promise.all([buildCjs(), buildEsm()]).catch(() => {
  console.log("Build failed");
  process.exit(1);
});
