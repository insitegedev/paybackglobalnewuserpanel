
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
            <span class="main-content-title mg-b-0 mg-b-lg-1">{{$product ? __('admin.allocation-update') : __('admin.allocation-create')}}</span>
        </div>
         
    </div>
    <!-- /breadcrumb -->
    <input name="old-images[]" id="old_images" hidden disabled value="{{$product->files}}">
    <!-- row -->
    {!! Form::model($product,['url' => $url, 'method' => $method,'files' => true]) !!}
    <div class="row">
        {{--<div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">




                </div>
            </div>
        </div>--}}
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">



                    <div class="form-group">
                        {!! Form::label('type',__('admin.type'),['class' => 'form-label']) !!}
                        <input readonly disabled type="text" name="type" class="form-control" placeholder="@lang('admin.type')" value="{{$product->type ?? ''}}">
                        @error('type')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>




                    <div class="form-group mb-0 mt-3 justify-content-end">
                        <div>
                            {!! Form::submit($product ? __('admin.update') : __('admin.create'),['class' => 'btn btn-primary']) !!}
                        </div>
                    </div>



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
                        <h6 class="card-title mb-1">@lang('admin.allocation_images')</h6>
                    </div>
                    <div class="input-images"></div>
                    @if ($errors->has('images'))
                        <span class="help-block">
                                            {{ $errors->first('images') }}
                                        </span>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!-- row closed -->

    <!-- /row -->
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h6 class="card-title mb-1">@lang('admin.values')</h6>
                    </div>
                    <div>
                        <div class="form-group">
                            <table id="options">
                                <tr>
                                    @foreach(config('translatable.locales') as $locale)


                                        <th>
                                            @lang('admin.title') - {{$locale}}
                                        </th>
                                    @endforeach

                                </tr>

                                <?php
                                $i = 1;
                                ?>
                                @foreach($product->values as $item)
                                    <tr>
                                        <input type="hidden" name="options[{{$item->id}}][isNew]" value="false">
                                        <input type="hidden" name="options[{{$item->id}}][isDelete]" value="false">
                                        @foreach(config('translatable.locales') as $locale)


                                            <td>
                                                <textarea class="form-control" type="text" name="options[{{$item->id}}][{{$locale}}][title]">{{$item->translate($locale)->title}}</textarea>
                                            </td>

                                        @endforeach
                                        <td>
                                            <input type="number" class="form-control" name="options[{{$item->id}}][value]" value="{{$item->value}}">
                                        </td>
                                        <td>
                                            <a href="javascript:void(0);" class="del-option"><i class="fa fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                @endforeach


                            </table>


                        </div>
                        <button type="button" id="add_option_btn">add value</button>
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
        CKEDITOR.replace('description-{{$locale}}', {
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

            tr.append('<td><input type="number" class="form-control" name="options[option_'+ ind +'][value]" value="#3399FF80"></td>')

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
