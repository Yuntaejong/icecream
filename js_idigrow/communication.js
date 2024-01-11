var events = new Events();
var el = window.parent.document.getElementById("customEvt");
var evt = new Events(el);

jQuery(function($) {
  events.on("idigrow:capture", function(event) {
    html2canvas(document.body).then(function(canvas) {
      var data = canvas.toDataURL("image/png");
      Receiver.port.postMessage(data);
    });
  });

  events.on("idigrow:submit", function(event) {
    var result = event.data;
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '채점 하기'
    };
    evt.trigger("pviewer:submit", result);
  });

  $('#ctr').find('.icon-btn-ctr').parents('button').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '연습장'
    };
    evt.trigger("pviewer:note", result);
  });

  $('#ctr').find('.icon-btn-ctr2').parents('button').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '단문 필기'
    };
    evt.trigger("pviewer:takenote", result);
  });

  $('#ctr').find('.icon-btn-ctr3').parents('button').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '장문 필기'
    };
    evt.trigger("pviewer:takenote", result);
  });

  $('#ctr').find('.icon-btn-ctr4').parents('button').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '삼각자'
    };
    events.trigger("idigrow:tool", {type: 1, name: "삼각자"});
    evt.trigger("pviewer:tool", result);
  });

  $('#ctr').find('.icon-btn-ctr5').parents('button').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '각도기'
    };
    events.trigger("idigrow:tool", {type: 2, name: "각도기"});
    evt.trigger("pviewer:tool", result);
  });

  $('#ctr').find('.icon-btn-ctr6').parents('button').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '자'
    };
    events.trigger("idigrow:tool", {type: 2, name: "자"});
    evt.trigger("pviewer:tool", result);
  });

  $('#comment-body').find('.btn').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'MediaProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '해설 영상 보기'
    };
    evt.trigger("pviewer:video", result);
  });

  $('#ft-r').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '나중에 풀기'
    };
    evt.trigger("pviewer:skip", result);
  });

  $('#btn-re').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '다시 풀기'
    };
    evt.trigger("pviewer:re", result);
  });

  $('#btn-next').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '다음 문제'
    };
    evt.trigger("pviewer:next", result);
  });

  $('#btn-analyze').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '분석하러가기'
    };
    evt.trigger("pviewer:analyze", result);
  });

  $('#ft-l').find('button').on('click', function() {
    var result = {};
    result.caliper = {
      'EVENT_TYPE': 'NavigationEvent',
      'PROFILE_TYPE': 'AssessmentProfile',
      'ACTION_TYPE': 'NavigatedTo',
      'OBJ_NAME': '목차보기'
    };
    evt.trigger("pviewer:next", result);
  });
});
