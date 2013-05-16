{
  graphitePort: 2003
, graphiteHost: "ec2-23-23-92-167.compute-1.amazonaws.com"
, port: 8125
, backends: [ "./backends/graphite", "./backends/console" ]
, flushInterval: 120000
, debug: true
, deleteCounters: true
, legacyNamespace: false
}
