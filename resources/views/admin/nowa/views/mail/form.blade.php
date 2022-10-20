
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
            <span class="main-content-title mg-b-0 mg-b-lg-1">{{__('admin.mailer_text_settings')}}</span>
        </div>

    </div>
    <!-- /breadcrumb -->

    <!-- row -->
    {!! Form::model($mail,['url' => $url, 'method' => $method,'files' => true]) !!}
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">~name~ ~email~ to replace with real</h4>
                    <div class="form-group">
                        <label class="form-label">@lang('admin.status_approve_subject')</label>
                        <input class="form-control" type="text" name="status_approve_subject" value="{{$mail->status_approve_subject}}">
                        @error('status_approve_subject')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.status_approve')</label>
                        <textarea id="status_approve" class="form-control" type="text" name="status_approve">{{$mail->status_approve}}</textarea>
                        @error('status_approve')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.status_reject_subject')</label>
                        <input class="form-control" type="text" name="status_reject_subject" value="{{$mail->status_reject_subject}}">
                        @error('status_reject_subject')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>


                    <div class="form-group">
                        <label class="form-label">@lang('admin.status_reject')</label>
                        <textarea id="status_reject" class="form-control" type="text" name="status_reject">{{$mail->status_reject}}</textarea>
                        @error('status_reject')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.verified_subject')</label>
                        <input class="form-control" type="text" name="verified_subject" value="{{$mail->verified_subject}}">
                        @error('verified_subject')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>


                    <div class="form-group">
                        <label class="form-label">@lang('admin.verified')</label>
                        <textarea id="verified" class="form-control" type="text" name="verified">{{$mail->verified}}</textarea>
                        @error('verified')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>


                    <div class="form-group">
                        <label class="form-label">@lang('admin.created_subject')</label>
                        <input class="form-control" type="text" name="created_subject" value="{{$mail->created_subject}}">
                        @error('created_subject')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>


                    <div class="form-group">
                        <label class="form-label">@lang('admin.created')</label>
                        <textarea id="created" class="form-control" type="text" name="created">{{$mail->created}}</textarea>
                        @error('created')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.mail_verified_subject')</label>
                        <input class="form-control" type="text" name="mail_verified_subject" value="{{$mail->mail_verified_subject}}">
                        @error('mail_verified_subject')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label class="form-label">@lang('admin.mail_verified')</label>
                        <textarea id="mail_verified" class="form-control" type="text" name="mail_verified">{{$mail->mail_verified}}</textarea>
                        @error('mail_verified')
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
                            {!! Form::submit(__('admin.update'),['class' => 'btn btn-primary']) !!}
                        </div>
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
        CKEDITOR.replace('status_approve', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token(),'type'=>'user'])}}",
            filebrowserUploadMethod: 'form',
        });
        CKEDITOR.replace('mail_verified', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token(),'type'=>'user'])}}",
            filebrowserUploadMethod: 'form',
        });

        CKEDITOR.replace('status_reject', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token(),'type'=>'user'])}}",
            filebrowserUploadMethod: 'form',
        });

        CKEDITOR.replace('verified', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token(),'type'=>'user'])}}",
            filebrowserUploadMethod: 'form',
        });

        CKEDITOR.replace('created', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token(),'type'=>'user'])}}",
            filebrowserUploadMethod: 'form',
        });
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
