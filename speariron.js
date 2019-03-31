#!/usr/bin/env node

var nativeMessage = require('chrome-native-messaging');

process.stdin
    .pipe(new nativeMessage.Input())
    .pipe(new nativeMessage.Transform(function(msg, push, done) {
        var reply = "message from native app"; // Implemented elsewhere by you.
        push(reply);                  // Push as many replies as you like.
        done();                       // Call when done pushing replies.
    }))
    .pipe(new nativeMessage.Output())
    .pipe(process.stdout)
;