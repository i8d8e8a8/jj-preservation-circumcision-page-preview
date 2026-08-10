<? include "$_SERVER[DOCUMENT_ROOT]/child/inc/head.php"; // 기존 홈페이지 head ?>
<? include "$_SERVER[DOCUMENT_ROOT]/child/inc/header.php"; // 기존 홈페이지 header·모바일 메뉴·우측 퀵바 ?>

<div id="sub-wrap">
    <? $v_cat = "5"; $sv = "2"; include "$_SERVER[DOCUMENT_ROOT]/child/sub/sub_visual.php"; // 정관/포경수술 서브 비주얼 ?>
    <div class="sub-contents">
        <div class="surgery2-area">
            <div class="ibox">
                <!-- 새 포경수술 안내 본문 시작 -->
                <div class="jj-circumcision-content-frame" style="width:100%;overflow:hidden;background:#fff;">
                    <iframe
                        id="jj-circumcision-content"
                        title="JJ비뇨기과 표재근막 보존 포경수술 안내"
                        src="/child/sub/surgery2/circumcision-assets/index.html?embedded=1"
                        loading="eager"
                        scrolling="no"
                        style="display:block;width:100%;height:1200px;border:0;background:#fff;"
                    ></iframe>
                </div>
                <script>
                (function () {
                    var frame = document.getElementById('jj-circumcision-content');
                    if (!frame) return;

                    function resizeFrame() {
                        try {
                            var doc = frame.contentDocument || frame.contentWindow.document;
                            var height = Math.max(
                                doc.documentElement.scrollHeight,
                                doc.body ? doc.body.scrollHeight : 0
                            );
                            if (height > 0) frame.style.height = height + 'px';
                        } catch (error) {
                            // 본문은 동일 도메인에 배포되므로 정상 운영에서는 실행되지 않습니다.
                        }
                    }

                    frame.addEventListener('load', function () {
                        resizeFrame();
                        try {
                            var doc = frame.contentDocument || frame.contentWindow.document;
                            var observer = new MutationObserver(resizeFrame);
                            observer.observe(doc.body, {
                                attributes: true,
                                childList: true,
                                subtree: true
                            });
                            if (window.ResizeObserver) {
                                var resizeObserver = new ResizeObserver(resizeFrame);
                                resizeObserver.observe(doc.documentElement);
                                if (doc.body) resizeObserver.observe(doc.body);
                            }
                        } catch (error) {
                            // 본문은 동일 도메인에 배포되므로 정상 운영에서는 실행되지 않습니다.
                        }
                        window.setTimeout(resizeFrame, 300);
                        window.setTimeout(resizeFrame, 1200);
                    });
                    window.addEventListener('resize', resizeFrame);
                })();
                </script>
                <!-- 새 포경수술 안내 본문 끝 -->
            </div>
        </div>
    </div>
</div>

<? include "$_SERVER[DOCUMENT_ROOT]/child/inc/footer.php"; // 기존 하단 상담 폼·병원 정보·footer ?>
