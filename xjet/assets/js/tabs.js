let activeTab = 'all'

window.initTabs = () => {
    document.querySelector('#all').addEventListener('click', () => {
        document.querySelector(`#${activeTab}`).classList.remove('active')
        document.querySelector('#all').classList.add('active')
        activeTab = 'all'
        window.tabChanged(activeTab)
    })
    document.querySelector('#babkiPrishli').addEventListener('click', () => {
        document.querySelector(`#${activeTab}`).classList.remove('active')
        document.querySelector('#babkiPrishli').classList.add('active')
        activeTab = 'babkiPrishli'
        window.tabChanged(activeTab)
    })
    document.querySelector('#babkiSpizdili').addEventListener('click', () => {
        document.querySelector(`#${activeTab}`).classList.remove('active')
        document.querySelector('#babkiSpizdili').classList.add('active')
        activeTab = 'babkiSpizdili'
        window.tabChanged(activeTab)
    })
}