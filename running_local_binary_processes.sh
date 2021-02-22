#ps aux | grep [B]rowserStackLocal | awk '{print $2}'
echo "Running Node processes: "
pgrep node | wc -l
