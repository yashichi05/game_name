// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function create_copy(text) {
    const inputEle = document.createElement('input')
    inputEle.value = text
    inputEle.style.width = '100px'
    inputEle.style.border = 1
    inputEle.style.background = 'rgba(255,255,255,0.3)'
    inputEle.style.marginLeft = '20px'
    inputEle.addEventListener('focus', () => {
        inputEle.select()
        document.execCommand('copy')
    })
    return inputEle
}
function set_VNDB() {
    const td_list = document.querySelectorAll('.stripe tr td')

    td_list.forEach(i => {
        // console.log(i)
        try {
            if (i.textContent.match('Developer')) {
                const text = i.nextSibling.firstElementChild.title
                const ele = create_copy(text)
                ele.style.color = 'white'
                i.nextSibling.append(ele)
            }
            else if (i.textContent.match('Original title')) {
                const text = i.nextSibling.textContent
                const ele = create_copy(text)
                ele.style.color = 'white'
                i.nextSibling.append(ele)
            }
        }
        catch {
            //
        }

    })
}


function set_dlsite() {

    const corp = document.querySelector('#work_right .maker_name')
    corp.parentElement.append(create_copy(corp.children[0].textContent))
    corp.parentElement.append(create_copy(document.querySelector('#work_name > *').textContent))
}

function set_getchu() {
    const name = document.querySelector('#soft-title')
    const corp = document.querySelector('#brandsite') || document.querySelector('#soft_table tr td:nth-of-type(2)').childNodes[0]
    name.parentElement.append(create_copy(corp.textContent.replace(/\n| /g, '')))
    name.parentElement.append(create_copy(name.childNodes[0].textContent.replace(/\n| /g, '')))
}


if (location.host.match(/^vndb/)) set_VNDB()
else if (location.host.match(/dlsite\.com$/)) set_dlsite()
else if (location.host.match(/getchu\.com$/)) set_getchu()

