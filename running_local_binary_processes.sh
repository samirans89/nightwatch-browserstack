#ps aux | grep [B]rowserStackLocal | awk '{print $2}'
echo "Running node processes: "
pgrep node | wc -l
