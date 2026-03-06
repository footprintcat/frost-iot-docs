# node_modules 打补丁

先执行 `pnpm patch` 命令

```sh
pnpm patch [package-name]
```

然后再修改对应目录下的代码，最后按照提示执行 `pnpm patch-commit ...` 命令即可

```sh
pnpm patch-commit "..."
```
