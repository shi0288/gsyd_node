#!/bin/sh
# shell.sh
#启动和停止项目用
#启动方式 sh shell.sh start [参数 dev test run] 分别表示启动开发模式，测试模式，和生产模式
#停止方式 sh shell.sh stop

usage()
{
        echo "usage: `basename $0` start|stop process name"
}       
OPT=$1
PROCESSID=$2
filterValue=`ps -ef|grep Filter.js|grep -v grep|awk '{print $2}'`
gatewayValue=`ps -ef|grep Gateway.js|grep -v grep|awk '{print $2}'`
if [ $# -eq 0 ]; then
        usage
        exit 1
fi      
case $OPT in
        start|Start) echo "Starting.....$PROCESSID"
         if [ ${#filterValue} -eq 0 ]; then
             nohup node Filter.js target=$PROCESSID filterPort=9088 > /data/mcplog/filter.log 2>&1 &
             echo "Start filter.js success"
         fi
         if [ ${#gatewayValue} -eq 0 ]; then
             nohup node Gateway.js target=$PROCESSID gtPort=9090 mq=backWay_1> /data/mcplog/gateway9090.log 2>&1 &
             nohup node Gateway.js target=$PROCESSID gtPort=9091 mq=backWay_2> /data/mcplog/gateway9091.log 2>&1 &
             echo "Start Gateway.js success"
         fi
         if [ ${#filterValue} -ne 0 -a ${#adminValue} -ne 0 -a ${#gatewayValue} -ne 0 ]; then
            echo "No bootable projects"
         fi

        ;;
        stop|Stop) echo "Stopping.....$PROCESSID"
               if [ ${#filterValue} -ne 0 ];  then
                 kill -9  `ps -ef|grep Filter.js|grep -v grep|awk '{print $2}'`
                 echo "Stop Filter.js success"
               fi
               if [ ${#gatewayValue} -ne 0 ];  then
                  kill -9  `ps -ef|grep Gateway.js|grep -v grep|awk '{print $2}'`
                  echo "Stop Gateway.js success"
               fi
        ;;
        restart|ReStart) echo "ReStarting.....$PROCESSID"
               if [ ${#filterValue} -ne 0 ];  then
                 kill -9  `ps -ef|grep Filter.js|grep -v grep|awk '{print $2}'`
               fi
               nohup node Filter.js target=$PROCESSID filterPort=9088 > /data/mcplog/filter.log 2>&1 &
               if [ ${#gatewayValue} -ne 0 ];  then
                  kill -9  `ps -ef|grep Gateway.js|grep -v grep|awk '{print $2}'`
               fi
               nohup node Gateway.js target=$PROCESSID gtPort=9090 mq=backWay_1> /data/mcplog/gateway9090.log 2>&1 &
               nohup node Gateway.js target=$PROCESSID gtPort=9091 mq=backWay_2> /data/mcplog/gateway9091.log 2>&1 &

               echo "ReStart success........"
        ;;
        *)usage
        ;;
esac    
