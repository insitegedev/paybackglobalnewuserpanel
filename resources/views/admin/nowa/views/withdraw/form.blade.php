
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

    <script src="{{asset('admin/assets/jscolor/jscolor.js')}}"></script>

@endsection

@section('content')

    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">{{$model ? __('admin.token_sale_update') : __('admin.token_sale_create')}}</span>
        </div>

    </div>
    <!-- /breadcrumb -->
    <input name="old-images[]" id="old_images" hidden disabled value="{{$model->files}}">
    <!-- row -->
    {!! Form::model($model,['url' => $url, 'method' => $method,'files' => true]) !!}
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">

                    <div class="form-group">
                        <label class="form-label">@lang('admin.amount')</label>
                        <input class="form-control" type="text" name="amount" value="{{$model->amount ?? ''}}">
                        @error('amount')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    @if ($model->wallet)
                    <div class="form-group">
                        <label class="form-label">@lang('admin.wallet')</label>
                        <input class="form-control" type="text" name="wallet" value="{{\Crypt::decryptString($model->wallet) ?? ''}}">
                        @error('wallet')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>
                    @else
                    <div class="form-group">
                        <label class="form-label">@lang('admin.wallet')</label>
                        <input class="form-control" type="text" name="wallet" value="">
                        @error('wallet')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>
                    @endif

@if ($model->amount_credited)
<div class="form-group">
    <label class="form-label">@lang('admin.amount_credited')</label>
    <input class="form-control" type="text" name="amount_credited" value="{{\Crypt::decryptString($model->amount_credited) ?? ''}}">
    @error('amount_credited')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.amount_credited')</label>
    <input class="form-control" type="text" name="amount_credited" value="">
    @error('amount_credited')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif


                    <div class="form-group">
                        <label class="form-label">@lang('admin.bank_name')</label>
                        <input class="form-control" type="text" name="bank_name" value="{{$model->bank_name ?? ''}}">
                        @error('bank_name')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

@if ($model->account_or_card)
<div class="form-group">
    <label class="form-label">@lang('admin.account_or_card')</label>
    <input class="form-control" type="text" name="account_or_card" value="{{ \Crypt::decryptString($model->account_or_card )?? ''}}">
    @error('account_or_card')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.account_or_card')</label>
    <input class="form-control" type="text" name="account_or_card" value="">
    @error('account_or_card')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif


@if ($model->name_surname)
<div class="form-group">
    <label class="form-label">@lang('admin.name_surname')</label>
    <input class="form-control" type="text" name="name_surname" value="{{ \Crypt::decryptString($model->name_surname)  ?? ''}}">
    @error('name_surname')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.name_surname')</label>
    <input class="form-control" type="text" name="name_surname" value="">
    @error('name_surname')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif


@if ($model->iban)
<div class="form-group">
    <label class="form-label">@lang('admin.iban')</label>
    <input class="form-control" type="text" name="iban" value="{{ \Crypt::decryptString($model->iban) ?? ''}}">
    @error('iban')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.iban')</label>
    <input class="form-control" type="text" name="iban" value="">
    @error('iban')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif


                    <div class="form-group">
                        <label class="form-label">@lang('admin.country_city')</label>
                        <input class="form-control" type="text" name="country_city" value="{{$model->country_city ?? ''}}">
                        @error('country_city')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.recipient_address')</label>
                        <input class="form-control" type="text" name="recipient_address" value="{{$model->recipient_address ?? ''}}">
                        @error('recipient_address')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>


                    @if ($model->swift)
                    <div class="form-group">
                        <label class="form-label">@lang('admin.swift')</label>
                        <input class="form-control" type="text" name="swift" value="{{ \Crypt::decryptString($model->swift) ?? ''}}">
                        @error('swift')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>
                    @else
                    <div class="form-group">
                        <label class="form-label">@lang('admin.swift')</label>
                        <input class="form-control" type="text" name="swift" value="">
                        @error('swift')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>
                    @endif


@if ($model->bank_recipient_address)
<div class="form-group">
    <label class="form-label">@lang('admin.bank_recipient_address')</label>
    <input class="form-control" type="text" name="bank_recipient_address" value="{{ \Crypt::decryptString($model->bank_recipient_address)  ?? ''}}">
    @error('bank_recipient_address')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.bank_recipient_address')</label>
    <input class="form-control" type="text" name="bank_recipient_address" value="">
    @error('bank_recipient_address')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif



@if ($model->correspondent_bank_swift)
<div class="form-group">
    <label class="form-label">@lang('admin.correspondent_bank_swift')</label>
    <input class="form-control" type="text" name="correspondent_bank_swift" value="{{ \Crypt::decryptString($model->correspondent_bank_swift) ?? ''}}">
    @error('correspondent_bank_swift')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.correspondent_bank_swift')</label>
    <input class="form-control" type="text" name="correspondent_bank_swift" value="">
    @error('correspondent_bank_swift')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif



@if ( $model->correspondent_bank)
<div class="form-group">
    <label class="form-label">@lang('admin.correspondent_bank')</label>
    <input class="form-control" type="text" name="correspondent_bank" value="{{  \Crypt::decryptString($model->correspondent_bank) ?? ''}}">
    @error('correspondent_bank')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.correspondent_bank')</label>
    <input class="form-control" type="text" name="correspondent_bank" value="">
    @error('correspondent_bank')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif



@if ($model->correspondent_bank_address)
<div class="form-group">
    <label class="form-label">@lang('admin.correspondent_bank_address')</label>
    <input class="form-control" type="text" name="correspondent_bank_address" value="{{ \Crypt::decryptString($model->correspondent_bank_address) ?? ''}}">
    @error('correspondent_bank_address')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.correspondent_bank_address')</label>
    <input class="form-control" type="text" name="correspondent_bank_address" value="">
    @error('correspondent_bank_address')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif


@if ($model->account_recipient_in_correspondent)
<div class="form-group">
    <label class="form-label">@lang('admin.account_recipient_in_correspondent')</label>
    <input class="form-control" type="text" name="account_recipient_in_correspondent" value="{{\Crypt::decryptString($model->account_recipient_in_correspondent) ?? ''}}">
    @error('account_recipient_in_correspondent')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@else
<div class="form-group">
    <label class="form-label">@lang('admin.account_recipient_in_correspondent')</label>
    <input class="form-control" type="text" name="account_recipient_in_correspondent" value="">
    @error('account_recipient_in_correspondent')
    <small class="text-danger">
        <div class="error">
            {{$message}}
        </div>
    </small>
    @enderror
</div>
@endif



                    @if ($model->expiration_date)
                    <div class="form-group">
                        <label class="form-label">@lang('admin.expiration_date')</label>
                        <input class="form-control" type="text" name="expiration_date" value="{{\Crypt::decryptString($model->expiration_date) ?? ''}}">
                        @error('expiration_date')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>
                    @else
                    <div class="form-group">
                        <label class="form-label">@lang('admin.expiration_date')</label>
                        <input class="form-control" type="text" name="expiration_date" value="">
                        @error('expiration_date')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>
                    @endif


                    <?php
                    $statuses = [
                        0 => 'not_verify',
                        1 => 'verify',
                        2 => 'pending',
                        3 => 'approved',
                        4 => 'rejected',
                        5 => 'canceled',
                        6 => 'manual check',
                        7 => 'under review',
                        8 => 'processing'
                    ]
                    ?>
                    <div class="form-group">
                        <label class="form-label">@lang('admin.status')</label>
                        <select class="form-control" name="status">

                            @foreach($statuses as $key => $status)
                                <option value="{{$key}}" {{$key == $model->status ? 'selected':''}}>
                                    {{$status}}
                                </option>
                            @endforeach
                        </select>
                        @error('expiration_date')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.method')</label>
                        <input class="form-control" type="text" name="method" value="{{$model->method ?? ''}}">
                        @error('method')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.comment')</label>
                        <input class="form-control" type="text" name="comment" value="{{$model->comment ?? ''}}">
                        @error('comment')
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
                    <div class="form-group mb-0 mt-3 justify-content-end">
                        <div>
                            {!! Form::submit($model ? __('admin.update') : __('admin.create'),['class' => 'btn btn-primary']) !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- row -->

    <!-- row closed -->
    {!! Form::close() !!}

@endsection

@section('scripts')

    <!--Internal  Datepicker js -->
    <script src="{{asset('assets/plugins/jquery-ui/ui/widgets/datepicker.js')}}"></script>

    <!--Internal  jquery.maskedinput js -->
    <script src="{{asset('assets/plugins/jquery.maskedinput/jquery.maskedinput.js')}}"></script>
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

    <!-- Internal form-elements js -->
    <script src="{{asset('assets/js/form-elements.js')}}"></script>

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
        $('[name="categories[]"]').click(function (e){
            let $this = $(this);


                let next = $this.closest('li').next('li');
                //console.log(next);
                if(next.hasClass('child')){
                    if($this.is(':checked')){

                        next.find('input[type=checkbox]').prop('checked',true);
                    } else {
                        next.find('input[type=checkbox]').prop('checked',false);
                    }
                }

                if($this.parents('li').hasClass('child')){

                    if($this.is(':checked')){

                        $this.parents('.child').prev('li').find('input[type=checkbox]').prop('checked',true);
                        //$this.parents('.child').find('input[type=checkbox]').prop('checked',true);
                    } else {
                        //$this.parents('.child').find('input[type=checkbox]').prop('checked',false);
                        $this.parents('.child').prev('li').find('input[type=checkbox]').prop('checked',false);
                    }
                }


        });

        $('.bool_ckbox').click(function (e){
            if($(this).is(':checked')){
                $(this).prev('input[type=hidden]').val(1);
            } else $(this).prev('input[type=hidden]').val(0);
        });


        let locales = @json(config('translatable.locales'));


        let ind = 1;

        $('#add_option_btn').click(function (){
            let tr = $('<tr></tr>');
            tr.append('<input type="hidden" name="options[option_'+ ind +'][isNew]" value="true">');
            tr.append('<input type="hidden" name="options[option_'+ ind +'][isDelete]" value="false">');
            Object.keys(locales).map((name, index) => {



                tr.append('<td> <textarea class="form-control" type="text" name="options[option_'+ ind +']['+ locales[name] +'][title]" value=""></textarea></td>');

            })

            tr.append('<td><input type="number" class="form-control" name="options[option_'+ ind +'][value]" value=""></td>')

            tr.append('<td><a href="javascript:void(0);" class="del-option"><i class="fa fa-trash-alt"></i></a></td>');

            $('#options').append(tr);

            ind++
            jscolor.install()

        });

        $(document).on('click','.del-option',function (e){

            let input = $(this).parents('tr').find('input[type=hidden]');

            if(input[0].value === 'true'){
                $(this).parents('tr').remove();
            } else {
                $(this).parents('tr').hide();
                input[1].value = 'true';
            }
        });

        $('select[name=type]').change(function (e){
            let value = $(this).val();

            if(value == 'select'){
                $('#option_row').show();
            } else {
                $('#option_row').hide();
            }
        });
    </script>

@endsection
