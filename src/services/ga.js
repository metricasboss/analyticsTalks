export const checkRevenue = async(googleId, callback) => {
    let response = await window.gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: googleId,
                    dateRanges: [{
                        startDate: '30daysAgo',
                        endDate: 'today'
                    }],
                    metrics: [{
                        expression: 'ga:transactionRevenue'
                    }],
                }
            ]
        }
    })

    callback(response.result.reports[0].data.totals[0].values[0])
}
    
export const checkProductCategory = async(googleId) => {
    let response = await window.gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: googleId,
                    dateRanges: [{
                        startDate: '30daysAgo',
                        endDate: 'today'
                    }],
                    metrics: [{
                        expression: 'ga:itemRevenue'
                    }],
                    dimensions:[{
                        "name": "ga:productCategory"
                    }],
                }
            ]
        }
    })
    return response.result.reports[0].data.rows
    
}

export const checkBounceRate = async(googleId) => {
    let response = await window.gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: googleId,
                    dateRanges: [{
                        startDate: '30daysAgo',
                        endDate: 'today'
                    }],
                    metrics: [{
                        expression: 'ga:bounceRate'
                    }]
                }
            ]
        }
    })
    return response.result.reports[0].data.totals[0].values[0]
}

export const checkGoalExists = async(googleId) => {
    let response = await window.gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: googleId,
                    dateRanges: [{
                        startDate: '30daysAgo',
                        endDate: 'today'
                    }],
                    metrics: [{
                        expression: 'ga:goalCompletionsAll'
                    }]
                }
            ]
        }
    })
    return response.result.reports[0].data.rows

}

export const checkAdwordsExists = async(googleId) => {
    let response = await window.gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: googleId,
                    dateRanges: [{
                        startDate: '30daysAgo',
                        endDate: 'today'
                    }],
                    metrics: [{
                        expression: 'ga:impressions'
                    }]
                }
            ]
        }
    })
}

export const checkEventsExists = async(googleId) => {
    let response = await window.gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: googleId,
                    dateRanges: [{
                        startDate: '30daysAgo',
                        endDate: 'today'
                    }],
                    metrics: [{
                        expression: 'ga:totalEvents'
                    }]
                }
            ]
        }
    })
    return response.result.reports[0].data.rows
}

export const checkThirdCheckoutReferenceExists = async(googleId) => {
    let response = await window.gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [
                {
                    viewId: googleId,
                    dateRanges: [{
                        startDate: '30daysAgo',
                        endDate: 'today'
                    }],
                    metrics: [{
                        expression: 'ga:sessions'
                    }],
                    dimensions:[{
                        name: "ga:source"
                    }],
                }
            ]
        }
    })
    
    return response.result.reports[0].data.rows

}