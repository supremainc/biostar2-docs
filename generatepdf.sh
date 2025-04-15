# -u : PDF로 변환할 URL 주소를 입력하세요. 커버 페이지를 기준으로 입력하면 됩니다.
# -0 : PDF로 출력할 파일명을 입력하세요.

node generatepdf -u "http://localhost:4000/biostar2-docs/cover/biostar2" --prince-args="--page-size='a4' --page-margin='0mm' --style=./print.css --javascript" -o ./pdf/biostar.pdf --dest ./pdf --include-index