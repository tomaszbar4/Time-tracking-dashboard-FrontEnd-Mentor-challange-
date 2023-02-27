const activityNames = document.querySelectorAll('.activity-name')
const switchItems = document.querySelectorAll('.switch-item')
const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')

let finalData = {}
let dataRange = 'daily'

loadData()

async function getData() {
    const response = await fetch('data.json')
    const data = await response.json()
    finalData = data
}

async function loadData() {
    await getData()
    const acitivityTimesCurrent = document.querySelectorAll('.activity-time-current')
    const activityTimesPrevious = document.querySelectorAll('.activity-time-previous')

    if (dataRange === 'daily') {
        acitivityTimesCurrent.forEach(function (activity, index) {
            const currentDaily = finalData[index].timeframes.daily.current
            activity.textContent = currentDaily === 1 ? finalData[index].timeframes.daily.current + 'hr' : finalData[index].timeframes.daily.current + 'hrs'

        })
        activityTimesPrevious.forEach(function (activity, index) {
            const previousDaily = finalData[index].timeframes.daily.previous
            activity.textContent = previousDaily === 1 ? 'Yesterday - ' + finalData[index].timeframes.daily.previous + 'hr' : 'Yesterday - ' + finalData[index].timeframes.daily.previous + 'hrs'
        })
    }
    else if (dataRange === 'weekly') {
        acitivityTimesCurrent.forEach(function (activity, index) {
            const currentWeekly = finalData[index].timeframes.weekly.current
            activity.textContent = currentWeekly === 1 ? finalData[index].timeframes.weekly.current + 'hr' : finalData[index].timeframes.weekly.current + 'hrs'

        })
        activityTimesPrevious.forEach(function (activity, index) {
            const previousWeekly = finalData[index].timeframes.weekly.previous
            activity.textContent = previousWeekly === 1 ? 'Last week - ' + finalData[index].timeframes.weekly.previous + 'hr' : 'Last week - ' + finalData[index].timeframes.weekly.previous + 'hrs'
        })
    }
    else {
        acitivityTimesCurrent.forEach(function (activity, index) {
            const currentMonthly = finalData[index].timeframes.monthly.current
            activity.textContent = currentMonthly === 1 ? finalData[index].timeframes.monthly.current + 'hr' : finalData[index].timeframes.monthly.current + 'hrs'

        })
        activityTimesPrevious.forEach(function (activity, index) {
            const previousMonthly = finalData[index].timeframes.monthly.previous
            activity.textContent = previousMonthly === 1 ? 'Last month - ' + finalData[index].timeframes.monthly.previous + 'hr' : 'Last month - ' + finalData[index].timeframes.monthly.previous + 'hrs'
        })
    }

}

switchItems.forEach(item => {
    item.addEventListener('click', (e) => {
        deleteActive()
        dataRange = e.target.dataset.value
        item.classList.add('active')
        loadData()
    })
})

function deleteActive() {
    const switchItems = document.querySelectorAll('.switch-item')
    switchItems.forEach(item => {
        item.classList.remove('active')
    })
}
