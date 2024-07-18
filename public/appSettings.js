var appSettings = {
    API_URL: {
      sysApi: 'https://mdw-api-ventura.carnivaluk.com',
      youthManagementAPI: 'https://mdw-api-ventura.carnivaluk.com',
      appCoreApi: 'https://mdw-api-ventura.carnivaluk.com',
      XDiningApi: 'https://mdw-api-ventura.carnivaluk.com',
      controlCenterApi: "https://mdw-api-ventura.carnivaluk.com",
      messageApi: 'https://pms-api-ventura.carnivaluk.com'
  
  
      // sysApi: 'https://sit.mdw-api-ship2.carnivaluk.com',
      // youthManagementAPI: 'https://sit.mdw-api-ship2.carnivaluk.com',   
      // appCoreApi: 'https://sit.webapp-api-ship2.pocruises.com',
      // XDiningApi: 'https://sit.webapp-api-ship2.pocruises.com',
      // controlCenterApi: "https://sit.mdw-api-ship2.carnivaluk.com",
      // messageApi: 'https://sit.mdw-api-ship2.carnivaluk.com'
    },
    APP_NAME: 'Carnival UK - Youth Management',
    APP_VERSION: '0.1.8',
    APP_USER_ACCESS_ROLES: {
  
    },
    BRAND: 'CN',
  
    BRAND_NAME: 'P&O Cruises', // Cunard, P&O Cruises
    CURRENCY_CODE: 'GBP',
    SHIP_CODE: 'QU',
    APP_LANGUAGE: 'en_GB',
  
    MODULES: {
      CHECK_IN_MODULE: {
        startCheckInBefore: 700, // in minutes
        bookingFilter: 'YOUTH'
      },
  
      AGE_BAND: [
        {
          key: '0-23 months',
          value: [0, 2]
        },
        {
          key: '0-4 years',
          value: [0, 4]
        },
        {
          key: '2-4 years',
          value: [2, 4]
        },
        {
          key: '2-7 years',
          value: [2, 7]
        },
        {
          key: '2-8 years',
          value: [2, 8]
        },
        {
          key: '2-17 years',
          value: [2, 17]
        },
        {
          key: '5-8 years',
          value: [5, 8]
        },
        {
          key: '8-12 years',
          value: [8, 12]
        },
        {
          key: '8-17 years',
          value: [8, 17]
        },
        {
          key: '9-12 years',
          value: [9, 12]
        },
        {
          key: '9-17 years',
          value: [9, 17]
        },
        {
          key: '13-17 years',
          value: [13, 17]
        }
      ],
      TC_RELATIONSHIP: ['Father', 'Mother', 'Uncle', 'Auntie', 'Other'],
      LOGIN_MODULE: {
        userNamePrefix: 'BRYT'
      },
      INDEPENDENT_CHILD_MIN_AGE: 13,
      MAX_AGE_TO_ATTEND_SESSION: 18,
      CANCELLED_STATUS: 'CANCELED',
      NEW_REG_TEMPLATECODE: 'TEMPLATE010',
      UPDATE_REG_TEMPLATECODE: 'TEMPLATE011',
      DELETED_TC_NOTIFICATION_TEMPLATECODE: 'TEMPLATE012',
      DELETE_TC_CONFIRMATION_TEMPLATECODE: 'TEMPLATE013',
      SEND_REGISTRATION_NOTIFICATION: 'Y',
      SHOW_API_FAIURE_ALERT: false,
      ESCORTED_BOOKING_ALLOWED_AGE: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      SHOW_API_FAILURE_ALERT_STATUS: [500, 0],
      SHOW_ALL_API_FAILURE_ALERT: false, // set to false will show error only for above defined status code
      NO_OF_CRUISELIST: 30,
      ENABLE_LIST_EVENTS_SUMMARY: true,
      BUTTON_COLOR: [
        {
          key: ['The Night Nursery', 'Night Nursery', 'Teen Zone', 'Kids Zone & Teen Zone', 'The Nursery'],
          value: 'yms-blue-color'
        },
        {
          key: ['Surfers', 'Kids Zone'],
          value: 'yms-green-color'
        },
        {
          key: ['Night Nursery Extra'],
          value: 'yms-orange-color'
        },
        {
          key: ['Splashers 2 Yr', 'Splashers 3/4', 'Splashers and Surfers', 'Play Zone', 'Splashers Surfers', 'SURFERS 5-8 - 1 hour'],
          value: 'yms-red-color'
        },
        {
          key: ['The Scene', 'H2O', 'Scubas & scene', 'Scubas & H2O', 'Scubas H20'],
          value: 'yms-purple-color'
        },
        {
          key: ['Scubas'],
          value: 'yms-yellow-color'
        },
      ],
      CHECKIN_BUTTON_CONDITION: 'eventName',
      API_RETRY_INTERVAL_SECONDS: 20,
      API_RETRY_SECONDS: 50,
      CHECK_IN_ACTIVITY_SYNC_INTERVAL: 3600, // in seconds (1 hour),
      CHECK_IN_ACTIVITY_CHECK_INTERVAL: 60, // in seconds (1 minute)
      CHECK_IN_ACTIVITY_RETRY_INTERVAL: 20, // in seconds (20 seconds)
      EVENT_REMAINING_DURATION_ONCHECKOUT: 60,
      CHECK_IN_ACTIVITY_REFRESH_INTERVAL: 300, // in seconds (5mins)
      SHOW_PAST_EVENT_IN_CURRENT_EVENT: 15, // in Minutess
      UPCOMING_EVENTS_ALLOWED_STATUS: ['EXPECTED',"CANCELED"],
      UPCOMING_EVENTS_LIST_COUNT: 0, // set 0 to list all upcoming events,
      BOOKING_REPORTS_ALLOWED_STATUS: ['EXPECTED', "CANCELED"],
      NOTES: {
        BOOKING_REPORT_CURRENT_DAY: "NOTE: Events that have taken place today but had no booking will not show in this list",
        BOOKING_REPORT_PAST_DAY: "NOTE: Events that are in the past will show only if a booking was made for that event",
        BOOKING_REPORT_FUTURE_DAY: "",
      },
      TURN_OFF_BOOKING_CHARGE: true,
      TURN_OFF_CANCELATION_CHARGE: true
    }
  }
  