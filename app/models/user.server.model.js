const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        trim: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    },
    website: {
        type: String,
        set: function(url) {
          if (!url) {
            return url;
          } else {
            if (url.indexOf('http://') !== 0   &&           url.indexOf('https://') !== 0) {
              url = 'http://' + url;
            }
    
            return url;
            }
        }
      },
    website: {
        type: String,
        get: function (url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                }

                return url;
            }
        }
    }
});

mongoose.model('User', UserSchema);