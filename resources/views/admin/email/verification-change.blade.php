<!DOCTYPE html>
<html>
<head>
    <title>{{$data['subject']}}</title>
    <!--<link type="image/x-icon" rel="icon" href="images/icon.ico">-->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />

</head>
<body>


            {!! str_replace(['~name~','~email~'],[$data['name'],$data['email']], $data['text']) !!}

</body>
</html>
