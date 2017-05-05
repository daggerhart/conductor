"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_1 = require("../models/project");
exports.PROJECTS = [
    new project_1.Project('some/path', {
        "name": "guzzlehttp/guzzle",
        "type": "library",
        "description": "Guzzle is a PHP HTTP client library",
        "keywords": ["framework", "http", "rest", "web service", "curl", "client", "HTTP client"],
        "homepage": "http://guzzlephp.org/",
        "license": "MIT",
        "authors": [
            {
                "name": "Michael Dowling",
                "email": "mtdowling@gmail.com",
                "homepage": "https://github.com/mtdowling"
            }
        ],
        "require": {
            "php": ">=5.5",
            "guzzlehttp/psr7": "^1.3.1",
            "guzzlehttp/promises": "^1.0"
        },
        "require_dev": {
            "ext-curl": "*",
            "phpunit/phpunit": "^4.0",
            "psr/log": "^1.0"
        },
        "autoload": {
            "files": ["src/functions_include.php"],
            "psr-4": {
                "GuzzleHttp\\": "src/"
            }
        },
        "autoload_dev": {
            "psr-4": {
                "GuzzleHttp\\Tests\\": "tests/"
            }
        },
        "extra": {
            "branch-alias": {
                "dev-master": "6.2-dev"
            }
        }
    })
];
//# sourceMappingURL=mock-projects.js.map