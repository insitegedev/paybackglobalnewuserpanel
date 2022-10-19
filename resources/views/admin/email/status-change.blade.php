<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>{{$data['subject']}}</title>

</head>
<body>


    {!! str_replace(['~name~','~email~'],[$data['name'],$data['email']], $data['text']) !!}

</body>
</html>
