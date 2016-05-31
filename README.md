# node-dl2-stats
node.js command-line tool for getting your dartslive rating, flights, and stats.

ダーツライブのレイティングやスタッツをコマンドラインでこっそり確認。

# 簡単な使い方
1. npm install -g してグローバルインストール。
2. ./config のdefault.json にカードIDと暗証番号を記入。
2. default.jsonをお好きなディレクトリに配置。 e.g. `~/.config/node-dl2-stats/default.json`
3. 環境変数にdefault.jsonを置いたディレクトリを設定。 e.g >`$ export $NODE_CONFIG_DIR=~/.config/node-dl2-stats`
4. ターミナルで実行。　`$ dl2-stats`
