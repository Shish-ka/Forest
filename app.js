let sec=60
let min=60
let h=24
let DiM=30
let DiY=365

console.log(`№1.В сутках ${h*min*sec} секунд`)
console.log(`№2.В 30 сутках ${DiM*h*min*sec} секунд`)
console.log(`№3.В году ${DiY*h*min*sec} секунд`)
console.log(`№4.В сутках ${h*min} минут`)
console.log(`№5.В году ${DiY*h*min} минут`)



let BiKB=1024
let KBiMB=1024
let MBiGB=1024
let GBiTB=1024

console.log(`№6.В мегабайте ${KBiMB*BiKB} байт`)
console.log(`№7.В гигабайте ${MBiGB*KBiMB*BiKB} байт`)
console.log(`№8.В 10 гигабайтах ${MBiGB*KBiMB*BiKB*10} байт`)
console.log(`№9.В терабайте ${GBiTB*MBiGB*KBiMB*BiKB} байт`)
console.log(`№10.В терабайте ${GBiTB*MBiGB*KBiMB} килобайт`)
