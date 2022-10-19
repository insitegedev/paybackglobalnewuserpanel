
@extends('admin.nowa.views.layouts.app')

@section('styles')

    <!--- Internal Select2 css-->
    <link href="{{asset('assets/plugins/select2/css/select2.min.css')}}" rel="stylesheet">

    <!---Internal Fileupload css-->
    <link href="{{asset('assets/plugins/fileuploads/css/fileupload.css')}}" rel="stylesheet" type="text/css"/>

    <!---Internal Fancy uploader css-->
    <link href="{{asset('assets/plugins/fancyuploder/fancy_fileupload.css')}}" rel="stylesheet" />

    <!--Internal Sumoselect css-->
    <link rel="stylesheet" href="{{asset('assets/plugins/sumoselect/sumoselect.css')}}">

    <!--Internal  TelephoneInput css-->
    <link rel="stylesheet" href="{{asset('assets/plugins/telephoneinput/telephoneinput.css')}}">

    <link rel="stylesheet" href="{{asset('uploader/image-uploader.css')}}">

@endsection

@section('content')

    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">{{$user ? __('admin.customer-update') : __('admin.customer-create')}}</span>
        </div>

    </div>
    <!-- /breadcrumb -->
    <input name="old-images[]" id="old_images" hidden disabled value="{{$user->files}}">
    <!-- row -->
    {!! Form::model($user,['url' => $url, 'method' => $method,'files' => true]) !!}
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">

                    {{--<div class="form-group">
                        <label class="form-label">{{__('admin.unique_id')}}</label>
                        <input disabled readonly class="form-control" type="text" name="name" value="{{$user->unique_id}}">

                    </div>--}}

                        <div class="form-group">
                            <label class="form-label">{{__('admin.name')}}</label>
                            <input class="form-control" type="text" name="name" value="{{$user->profile?$user->profile->name:""}}">
                            @error('name')
                            <small class="text-danger">
                                <div class="error">
                                    {{$message}}
                                </div>
                            </small>
                            @enderror
                        </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.surname')}}</label>
                        <input class="form-control" type="text" name="surname" value="{{$user->profile?$user->profile->surname:""}}">
                        @error('surname')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.phone')}}</label>
                        <input class="form-control" type="text" name="phone" value="{{$user->profile?$user->profile->phone:""}}">
                        @error('phone')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.email')}}</label>
                        <input class="form-control" type="text" name="email" value="{{$user->email}}" {{$user->email ? 'disabled' : ''}}>
                        @error('email')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.password')}}</label>
                        <input class="form-control" type="text" name="password" value="">
                        @error('password')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>


                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">


                    {{--<div class="form-group">
                        <label class="form-label">{{__('admin.eth_balance')}}</label>
                        <input class="form-control" type="text" name="eth" value="{{isset($customer->balance['eth']) ? $customer->balance['eth'] : null}}">

                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.dac_balance')}}</label>
                        <input class="form-control" type="text" name="dac" value="{{isset($customer->balance['dac']) ? $customer->balance['dac'] : null}}">

                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.btc_balance')}}</label>
                        <input class="form-control" type="text" name="btc" value="{{isset($customer->balance['btc']) ? $customer->balance['btc'] : null}}">

                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.usd_balance')}}</label>
                        <input class="form-control" type="text" name="usd" value="{{isset($customer->balance['usd']) ? $customer->balance['usd'] : null}}">

                    </div>
--}}




                    <div class="form-group">
                        <label class="form-label">{{__('admin.manager_name')}}</label>
                        <input class="form-control" type="text" name="manager_name" value="{{$user->manager_name}}">
                        @error('manager_name')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.manager_email')}}</label>
                        <input class="form-control" type="text" name="manager_email" value="{{$user->manager_email}}">
                        @error('manager_email')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.manager_phone')}}</label>
                        <input class="form-control" type="text" name="manager_phone" value="{{$user->manager_phone}}">
                        @error('manager_phone')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <?php
                    $statuses = [
                        'waiting' => __('admin.waiting'),
                        'approved' => __('admin.approved'),
                        'rejected' => __('admin.rejected'),
                        //'verified' => __('admin.verified'),
                    ]
                    ?>
                    <div class="form-group">
                        <label class="form-label">@lang('admin.status')</label>
                        <select name="status" class="form-control">

                            @foreach($statuses as $key => $status)
                                <option value="{{$key}}" {{$user->status == $key ? 'selected':''}}>{{$status}}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.verified')}}</label>
                        <select name="verified" class="form-control">
                            <option
                                {{$user->verified?"selected":""}} value="1">@lang('client.verified')</option>
                            <option
                                {{!$user->verified?"selected":""}} value="0">@lang('client.not_verified')</option>
                        </select>



                        @error('verified')
                        <small class="errorTxt4">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">{{__('admin.verification_proggress')}}</label>
                        <input class="form-control" type="number" name="verification_proggress" value="{{$user->verification_proggress}}">
                        @error('verification_proggress')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>



                    <div class="form-group">

                            <label class="ckbox"><input type="checkbox" name="is_send_email" value="true" {{$user->is_send_email ? 'checked' : ''}}><span>{{__('admin.send_email')}}</span></label>


                    </div>


                    <div class="form-group mb-0 mt-3 justify-content-end">
                        <div>
                            {!! Form::submit($user->created_at ? __('admin.update') : __('admin.create'),['class' => 'btn btn-primary']) !!}
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-md-12 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="main-content-label mg-b-5">
                        @lang('admin.balance')
                    </div>
                    {{--<p class="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>--}}
                    <button id="add_balance" type="button">add balance</button>
                    <div id="balance">

                        {{--@dd($customer->balances)--}}
                        @foreach($user->balances as $balance)
                            <div class="input-group">
                                <div class="input-group-text">
                                    <select name="currency_id[]">
                                        @foreach($currencies as $currency)
                                            <option {{$balance->currency_id == $currency->id ? 'selected' : ''}} value="{{$currency->id}}">{{$currency->code}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <input name="value[]" class="form-control" placeholder="value" type="number" value="{{$balance->value}}"><button type="button" class="btn del_cur">delete</button>
                            </div>
                        @endforeach
                    </div>
                    @error('currency_id.*')
                    <small class="errorTxt4">
                        <div class="error">
                            {{$message}}
                        </div>
                    </small>
                    @enderror
                </div>
            </div>
        </div>

        <div class="col-md-12 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="main-content-label mg-b-5">
                        @lang('admin.wallet')
                    </div>
                    {{--<p class="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>--}}
                    <button id="add_wallet" type="button">add wallet</button>
                    <div id="wallet">

                        {{--@dd($customer->balances)--}}
                        @foreach($user->wallets as $wallet)
                            <div class="input-group">
                                <div class="input-group-text">
                                    <select name="wall_currency_id[]">
                                        @foreach($currencies as $currency)
                                            <option {{$wallet->currency_id == $currency->id ? 'selected' : ''}} value="{{$currency->id}}">{{$currency->code}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <input name="address[]" class="form-control" placeholder="address" type="text" value="{{$wallet->address}}"><button type="button" class="btn del_wall">delete</button>
                            </div>
                        @endforeach
                    </div>
                    @error('wall_currency_id.*')
                    <small class="errorTxt4">
                        <div class="error">
                            {{$message}}
                        </div>
                    </small>
                    @enderror
                </div>
            </div>
        </div>
    </div>

    <!-- /row -->
    <!-- row -->
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h6 class="card-title mb-1">@lang('admin.customer_images')</h6>
                    </div>
                    <div class="input-images"></div>
                    @if ($errors->has('images'))
                        <span class="help-block">
                                            {{ $errors->first('images') }}
                                        </span>
                    @endif

                    <div class="row">

                        <?php $header = __('admin.files');?>
                        @foreach($user->files as $file)

                            <?php
                            switch ($file->type){
                                case 4:
                                    $header = __('admin.passport_file');
                                    break;
                                case 5:
                                    $header = __('admin.national_card_file');
                                    break;
                                case 6:
                                    $header = __('admin.driver_license_file');
                                    break;
                            }

                            ?>
                            <div class="col col-sm-3">
                                <h6>{{$header}}</h6>
                                <a href="{{asset($file->path . '/' . $file->title)}}">
                                    <img src="{{asset($file->path . '/' . $file->title)}}" height="200">
                                </a>
                            </div>


                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- row closed -->

    <!-- /row -->

    <!-- row -->

    <!-- row closed -->
    {!! Form::close() !!}

@endsection

@section('scripts')

    <!--Internal  Datepicker js -->
    <script src="{{asset('assets/plugins/jquery-ui/ui/widgets/datepicker.js')}}"></script>

    <!-- Internal Select2 js-->
    <script src="{{asset('assets/plugins/select2/js/select2.min.js')}}"></script>

    <!--Internal Fileuploads js-->
    <script src="{{asset('assets/plugins/fileuploads/js/fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fileuploads/js/file-upload.js')}}"></script>

    <!--Internal Fancy uploader js-->
    <script src="{{asset('assets/plugins/fancyuploder/jquery.ui.widget.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.iframe-transport.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.fancy-fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/fancy-uploader.js')}}"></script>

    <!--Internal  Form-elements js-->
    <script src="{{asset('assets/js/advanced-form-elements.js')}}"></script>
    <script src="{{asset('assets/js/select2.js')}}"></script>

    <!--Internal Sumoselect js-->
    <script src="{{asset('assets/plugins/sumoselect/jquery.sumoselect.js')}}"></script>

    <!-- Internal TelephoneInput js-->
    <script src="{{asset('assets/plugins/telephoneinput/telephoneinput.js')}}"></script>
    <script src="{{asset('assets/plugins/telephoneinput/inttelephoneinput.js')}}"></script>

    <script src="{{asset('uploader/image-uploader.js')}}"></script>

    <script>
        let oldImages = $('#old_images').val();
        if (oldImages) {
            oldImages = JSON.parse(oldImages);
        }
        let imagedata = [];
        let getUrl = window.location;
        let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];
        if (oldImages && oldImages.length > 0) {
            oldImages.forEach((el, key) => {
                let directory = '';
                if (el.fileable_type === 'App\\Models\\Project') {
                    directory = 'project';
                }
                imagedata.push({
                    id: el.id,
                    src: `${baseUrl}${el.path}/${el.title}`
                })
            })
            $('.input-images').imageUploader({
                preloaded: imagedata,
                imagesInputName: 'images',
                preloadedInputName: 'old_images'
            });
        } else {
            $('.input-images').imageUploader();
        }
    </script>

    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script>

        @foreach(config('translatable.locales') as $locale)
        CKEDITOR.replace('description-{{$locale['locale']}}', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });
        @endforeach
    </script>

    <script>
        $('#add_balance').click(function (e){
            let options = '';
            let cur = @json($currencies);


            cur.forEach(function (el,i){
                options += '<option value="' + el.id + '">' + el.code + '</option>';
            });

            console.log(options);
            let row = $('<div class="input-group"> <div class="input-group-text"> <select name="currency_id[]">' + options + '</select></div> <input name="value[]" class="form-control" id="dateMask" placeholder="value" type="number"><button type="button" class="btn del_cur">delete</button> </div>');
            $('#balance').append(row);
        });

        $(document).on('click','.del_cur',function (e){

            $(this).parent('.input-group').remove()
        });


        $('#add_wallet').click(function (e){
            let options = '';
            let cur = @json($currencies);

            cur.forEach(function (el,i){
                options += '<option value="' + el.id + '">' + el.code + '</option>';
            });

            console.log(options);
            let row = $('<div class="input-group"> <div class="input-group-text"> <select name="wall_currency_id[]">' + options + '</select></div> <input name="address[]" class="form-control" id="dateMask" placeholder="address" type="text"><button type="button" class="btn del_wall">delete</button> </div>');
            $('#wallet').append(row);
        });

        $(document).on('click','.del_wall',function (e){

            $(this).parent('.input-group').remove()
        });

        $('[name="currency_id[]"]').change(function (e){
            /*let id = $(this).val();
            $('#balance').find('[name="currency_id[]"]').each(function (el,i){
               if($(i).val() === id){
                   alert('not');
                   return false;
               }
            });*/
        });
    </script>

@endsection
