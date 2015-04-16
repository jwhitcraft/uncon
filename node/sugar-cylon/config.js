var config = {};

config.instance = {
    // This is the URL to the SugarCRM REST API you will be using
    // You will want to use an IP address if accessing remotely from
    // a Raspberry Pi device.
    serverUrl: "http://192.168.0.109/Mango/ent/sugarcrm/rest/v10",
    platform: "mobile",
    timeout: 30
};

config.users = {
    admin: {username: 'admin', password: 'a'},
    jim: {username: 'jim', password: 'jim'}
};

// Change port to match the serial connection to your Arduino,
// discover this using the command `gort scan serial`
config.arduinoPort = '/dev/tty.usbmodem1411';


/***************************************
 * No need to change anything below this
 */
config.ARDUINO = 'arduino';
config.RASPI = 'raspi';

module.exports = config;