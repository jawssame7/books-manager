import { URL, fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react'
import { UserConfigExport} from "vite";
import { defineConfig} from "vite";

const app = async (): Promise<UserConfigExport> => {
    return defineConfig({
        plugins: [react()],
        assetsInclude: ['/sb-preview/runtime.js'],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: fileURLToPath(new URL('../src',
                        import.meta.url)),
                }
            ]
        }
    });
}

export default app