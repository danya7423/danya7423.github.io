window.onload = async () => {
    let req = await fetch(`https://jet.xton.me/api/v1/webapp.operationsHistory`)
    req = await req.json()

    let subtitle = req.token
    document.querySelector(".subtitle").innerHTML = subtitle

    let html = ""

    for (i in req.history) {
        html += `<div class="item">
        <div class="left">
            <img src=${req.history[i].icon} />
            <div class="cell">
                <div class="title">
                    ${req.history[i].positive ? 'Пополнение' : "Списание"}
                </div>
                <div class="subtitle">
                    ${req.history[i].subtitle ? req.history[i].subtitle : ""}
                </div>
            </div>
        </div>

        <div class="right ${req.history[i].positive ? 'green' : "red"}">
            ${req.history[i].positive ? '+' : "-"} ${req.history[i].amount} ${req.symbol.toUpperCase()}
        </div>
    </div>`
    }

    document.querySelector('.transactions').innerHTML = html

    window.tabChanged = (tab) => {
        let html = ""

        for (i in req.history) {
            let add = false

            if (tab == 'all') {
                add = true
            }

            if (tab == 'babkiPrishli' && req.history[i].positive) {
                add = true
            }

            if (tab == 'babkiSpizdili' && !req.history[i].positive) {
                add = true
            }

            if (add) {
                html += `<div class="item">
            <div class="left">
                <img src=${req.history[i].icon} />
                <div class="cell">
                    <div class="title">
                        ${req.history[i].positive ? 'Пополнение' : "Списание"}
                    </div>
                    <div class="subtitle">
                        ${req.history[i].subtitle ? req.history[i].subtitle : ""}
                    </div>
                </div>
            </div>

            <div class="right ${req.history[i].positive ? 'green' : "red"}">
                ${req.history[i].positive ? '+' : "-"} ${req.history[i].amount} ${req.symbol.toUpperCase()}
            </div>
        </div>`
            }
        }

        document.querySelector('.transactions').innerHTML = html
    }

    window.initTabs()
}