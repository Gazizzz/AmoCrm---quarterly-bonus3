let monthsWithQuoter = {
  1: 1,
  2: 1,
  3: 1,
  4: 2,
  5: 2,
  6: 2,
  7: 3,
  8: 3,
  9: 3,
  10: 4,
  11: 4,
  12: 4,
};

let date = new Date();
// const formattedDate = dateFns.format(date, "dd.MM.yyyy");
const formattedDate = new Date()
  .toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  .split("/")
  .join(".");
function findMonthQuarter(date) {
  let arrDataWithoutDot = date.split(".");
  let [day, month, year] = arrDataWithoutDot;
  let dateDayMonthYear = new Date(year, month, day);
  let findQuarter =
    monthsWithQuoter[
      dateDayMonthYear.getMonth()
    ]; /*  Это тоже самое, что и  let monthItemDT = arr.find((item) => item.month == Dateto.getMonth());
                                                                                       console.log(monthItemDT.quarter);   */
  return findQuarter;
}
// const period = url.searchParams.get("period");
// const needSendDate = url.searchParams.get("sendDate") === "true";
const currentDate = new Date();
let currentQuater = findMonthQuarter(formattedDate);
function quarterPrevious() {
  if (currentQuater === 1) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-01-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;

    let dateTo = new Date(`${currentDate.getFullYear()}-03-31`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);

    let timestamptDateTo = dateTo.getTime() / 1000;

    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 2) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-04-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-06-30`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 3) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-07-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-09-30`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 4) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-10-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-12-31`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
}
let getTimeMonthFrom;
const headerFrom = document.querySelector(".header-from");
let yearr = new Date().getFullYear();
let periodYear = document.querySelectorAll(".periodYear");
periodYear.forEach((year) => {
  year.addEventListener("click", (e) => {
    yearr = e.target.innerHTML;
  });
});
const periodQuarter = document.querySelectorAll(".quarterPeriod");

periodQuarter.forEach((quarter) => {
  quarter.addEventListener("click", (e) => {
    const currentQuater = Number(e.target.dataset.number);
    function quarterPrevious() {
      if (currentQuater === 1) {
        let dateFrom = new Date(`${yearr}-01-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(59);
        dateFrom.setSeconds(59);

        let timestamptDateFrom = dateFrom.getTime() / 1000;

        let dateTo = new Date(`${yearr}-03-31`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);

        let timestamptDateTo = dateTo.getTime() / 1000;

        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 2) {
        let dateFrom = new Date(`${yearr}-04-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        dateFrom.setSeconds(0);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-06-30`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 3) {
        let dateFrom = new Date(`${yearr}-07-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        dateFrom.setSeconds(0);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-09-30`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 4) {
        let dateFrom = new Date(`${yearr}-10-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        dateFrom.setSeconds(0);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-12-31`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
    }
    const quarterNumb = e.target.innerHTML;
    headerFrom.innerHTML = `Период: ${quarterNumb} квартал ${yearr} года`;

    render({
      from: quarterPrevious().timestamptDateFrom,
      to: quarterPrevious().timestamptDateTo,
      currentQuater,
    });
  });
});
let periodNinetyDays = new Date();
periodNinetyDays.setHours(0);
periodNinetyDays.setMinutes(0);
periodNinetyDays.setSeconds(0);
function quarterCurrent() {
  // let resultDate = dateFns.subDays(periodNinetyDays, 90);
  const resultDate = new Date(
    new Date(periodNinetyDays).getTime() - 90 * 24 * 60 * 60 * 1000
  );
  let timestamptDateFrom = Math.floor(resultDate.getTime() / 1000);
  let periodNinetyDayEnd = new Date();
  periodNinetyDayEnd.setHours(0);
  periodNinetyDayEnd.setMinutes(59);
  periodNinetyDayEnd.setSeconds(59);
  let timestamptDateTo = Math.floor(periodNinetyDayEnd.getTime() / 1000);
  return { timestamptDateFrom, timestamptDateTo };
}

let filterDateParams = {
  from: quarterCurrent().timestamptDateFrom,
  to: quarterCurrent().timestamptDateTo,
};
let filterDateParamss = {
  from: quarterPrevious().timestamptDateFrom,
  to: quarterPrevious().timestamptDateTo,
};

function loadManagers() {
  const queryParams = {
    type: "managers",
  };

  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/my/users_json.php",
      type: "post",
      data: queryParams,

      dataType: "json", // Expected response data type

      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

function loadCompanies(query) {
  return new Promise((resolve, reject) => {
    const filterQuery = query || filterDateParams;
    const queryParams = {
      filterQuery,
    };

    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/my/companies_json.php",
      method: "get",
      dataType: "json",
      data: filterQuery,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
function filterLeadsByManager(leads, managerId) {
  const filteredData = leads.filter((item) => {
    const dateStr = item.created_at;
    const dateObj = new Date(dateStr);
    // dateObj.setHours(0, 0);
    const month = (dateObj.getMonth() + 1).toString().replace(/^0+/, "");

    function findMonthQuarter(date) {
      let findQuarter = monthsWithQuoter[date];
      return findQuarter;
    }

    const currentQuater = findMonthQuarter(month);

    return (
      Number(item.responsible_id) === managerId
      // &&
      //
      // currentQuater <= query.currentQuater
      // 2 <= 2
    );
  });

  return filteredData;
}
function loadLeads(query) {
  const filterQuery = query || filterDateParams;
  const queryParams = {
    type: "filter_leads",
    data: filterQuery,
  };

  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/",
      type: "POST",

      data: queryParams,

      dataType: "json", // Expected response data type
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
function filterLeads(leadss, managerId) {
  const filteredDataLeadsCompany = leadss.filter(
    (item) => Number(item.company_responsible_id) == managerId
  );

  return filteredDataLeadsCompany;
}

function loadLeadsComplete(query) {
  const filterQuery = query || filterDateParamss;
  const queryParams = {
    type: "filter_complete_leads",
    data: filterQuery,
  };
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/",
      type: "post",
      data: queryParams,

      dataType: "json", // Expected response data type
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
function filterLeadsComplete(leadss, managerId) {
  const filteredDataLeadsComplete = leadss.filter(
    (item) => Number(item.lead_responsible_id) == managerId
  );

  return filteredDataLeadsComplete;
}
function renderManagers(managersArr) {
  const fragment = $(document.createDocumentFragment());
  const tableEl = $(".js-tbody");
  let num = 0;
  managersArr.forEach((manager, index) => {
    let totalSumm = 0;
    let totalSummFormatted;
    const allLeadsCount = manager.allManagerLeads.length;
    const percentOfCompletedLeads = allLeadsCount
      ? Math.round((manager.leadCount * 100) / allLeadsCount)
      : 0;

    const $row = $("<tr>");
    const $index = $("<td>").text((num = num + 1));
    const $name = $("<td>").text(manager.name);
    const $percentActiveLeads = $("<td>").text(percentOfCompletedLeads + "%");
    $percentActiveLeads.addClass("js-Center");
    manager.leadsFilterComppleted.map((item, index) => {
      totalSumm += Number(item.lead_sum);

      totalSummFormatted = totalSumm.toLocaleString("en-US");
    });
    if (totalSumm < 0) {
      totalSummFormatted = 0;
    } else {
      totalSummFormatted = totalSumm.toLocaleString("en-US");
    }
    const $QuarterlyBonusAmount = $("<td>").text(
      `${percentOfCompletedLeads / 10}%`
    );
    $QuarterlyBonusAmount.addClass("js-Center");
    const $summ = $("<td>").text(totalSummFormatted);
    function bonusQuarter() {
      const Percent = $("<td>").text(
        Math.round(
          (totalSumm / 100) * (percentOfCompletedLeads / 10)
        ).toLocaleString("en-US")
      );
      return Percent;
    }

    $row
      .append($index)
      .append($name)
      // .append(totalSummFormatted)
      .append($percentActiveLeads)
      .append($QuarterlyBonusAmount)
      .append($summ)
      .append(bonusQuarter());
    fragment.append($row);
  });
  tableEl.empty();
  tableEl.append(fragment);
}
function filterLeads2(leadss, amo_id) {
  const filteredDatas = leadss.filter((item) => item.amo_company_id == amo_id);

  return filteredDatas;
}

async function render(query) {
  const managers = await loadManagers();
  // 1. загрузить все лиды
  const allCompanies = await loadCompanies(query);

  const leads = await loadLeads(query);
  const leadsCompleted = await loadLeadsComplete(query);
  const allLeadsWithCompanies = allCompanies.map((company) => {
    const companyLeads = filterLeads2(leads, company.amo_id);

    return {
      ...company,
      companyLeads,
    };
  });

  const newManagerListWithLeads = managers.map(async (item) => {
    // отфильтолвать лиды по менеджеру
    const allManagerLeads = filterLeadsByManager(allCompanies, item.id, query);
    const leadsFilterCompany = filterLeads(leads, item.id);

    const leadsFilterComppleted = filterLeadsComplete(leadsCompleted, item.id);
    const filteredCompaniesByManager = allLeadsWithCompanies.filter(
      (company) => {
        return (
          company.companyLeads.length > 0 && company.responsible_id == item.id
        );
      }
    );

    const leadCount = filteredCompaniesByManager.reduce((acc, curr) => {
      if (curr.responsible_id == item.id) {
        acc = acc + 1;
      }

      return acc;
    }, 0);
    return {
      ...item,
      /*leads,*/ /*leadsCompleted,*/ allManagerLeads,
      leadsFilterCompany,
      leadCount,
      leadsFilterComppleted,
    };
  });
  const result = await Promise.all(newManagerListWithLeads);

  renderManagers(result);
  const centerStyle = document.querySelectorAll(".js-Center");

  centerStyle.forEach((element) => {
    element.style.textAlign = "center";
  });
}
render({
  from: quarterCurrent().timestamptDateFrom,
  to: quarterCurrent().timestamptDateTo,

  currentQuater,
});
