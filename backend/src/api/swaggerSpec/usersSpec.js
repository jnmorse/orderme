const spec = {
    'tags': [
        {
            'name': 'users',
            'description': 'Everything about Users',
            'externalDocs': {
                'description': 'Find out more',
                'url': 'http://swagger.io'
            }
        }
    ],
    'paths': {
        '/users/login': {
            'get': {
                'tags': [
                    'users'
                ],
                'summary': 'Logs user into the system',
                'description': '',
                'operationId': 'loginUser',
                'produces': 'application/json',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'query',
                        'description': 'The user name for login',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'name': 'password',
                        'in': 'query',
                        'description': 'The password for login in clear text',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'schema': {
                            'type': 'string'
                        },
                        'headers': {
                            'X-Rate-Limit': {
                                'type': 'integer',
                                'format': 'int32',
                                'description': 'calls per hour allowed by the user'
                            },
                            'X-Expires-After': {
                                'type': 'string',
                                'format': 'date-time',
                                'description': 'date in UTC when token expires'
                            }
                        }
                    },
                    '400': {
                        'description': 'Invalid username/password supplied'
                    }
                }
            }
        },
        '/users/logout': {
            'get': {
                'tags': [
                    'users'
                ],
                'summary': 'Logs out current logged in user session',
                'description': '',
                'operationId': 'logoutUser',
                'produces': 'application/xml',
                'parameters': [],
                'responses': {
                    'default': {
                        'description': 'successful operation'
                    }
                }
            }
        },
        '/users/{username}': {
            'get': {
                'tags': [
                    'users'
                ],
                'summary': 'Get user by user name',
                'description': '',
                'operationId': 'getUserByName',
                'produces': 'application/json',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'The name that needs to be fetched. Use user1 for testing. ',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    },
                    '400': {
                        'description': 'Invalid username supplied'
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            },
            'put': {
                'tags': [
                    'users'
                ],
                'summary': 'Updated user',
                'description': 'This can only be done by the logged in user.',
                'operationId': 'updateUser',
                'produces': 'application/json',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'name that need to be updated',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'in': 'body',
                        'name': 'body',
                        'description': 'Updated user object',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    }
                ],
                'responses': {
                    '400': {
                        'description': 'Invalid user supplied'
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            },
            'delete': {
                'tags': [
                    'users'
                ],
                'summary': 'Delete user',
                'description': 'This can only be done by the logged in user.',
                'operationId': 'deleteUser',
                'produces': 'application/json',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'The name that needs to be deleted',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '400': {
                        'description': 'Invalid username supplied'
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            }
        }
    },
    'definitions': {
        'User': {
            'type': 'object',
            'properties': {
                'id': {
                    'type': 'integer',
                    'format': 'int64'
                },
                'username': {
                    'type': 'string'
                },
                'firstName': {
                    'type': 'string'
                },
                'lastName': {
                    'type': 'string'
                },
                'email': {
                    'type': 'string'
                },
                'password': {
                    'type': 'string'
                },
                'phone': {
                    'type': 'string'
                },
                'userStatus': {
                    'type': 'integer',
                    'format': 'int32',
                    'description': 'User Status'
                }
            },
            'xml': {
                'name': 'User'
            }
        }
    }
};

module.exports = spec;
