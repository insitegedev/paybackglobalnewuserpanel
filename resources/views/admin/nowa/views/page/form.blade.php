
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
            <span class="main-content-title mg-b-0 mg-b-lg-1">{{ __('admin.page-update')}} - {{$page->key}}</span>
        </div>
         
    </div>
    <!-- /breadcrumb -->
    <input name="old-images[]" id="old_images" hidden disabled value="{{$page->files}}">
    <!-- row -->
    {!! Form::model($page,['url' => $url, 'method' => $method,'files' => true]) !!}
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h6 class="card-title mb-1">@lang('admin.editpage') </h6>
                    </div>

                    <div class="mb-4">


                        <div class="panel panel-primary tabs-style-2">
                            <div class=" tab-menu-heading">
                                <div class="tabs-menu1">
                                    <!-- Tabs -->
                                    <ul class="nav panel-tabs main-nav-line">
                                        @foreach(config('translatable.locales') as $locale)
                                            <?php
                                            $active = '';
                                            if($loop->first) $active = 'active';
                                            ?>

                                            <li><a href="#lang-{{$locale}}" class="nav-link {{$active}}" data-bs-toggle="tab">{{$locale}}</a></li>
                                        @endforeach

                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body tabs-menu-body main-content-body-right border">
                                <div class="tab-content">

                                    @foreach(config('translatable.locales') as $locale)

                                        <?php
                                        $active = '';
                                        if($loop->first) $active = 'active';
                                        ?>
                                        <div class="tab-pane {{$active}}" id="lang-{{$locale}}">
                                            <div class="main-content-label mg-b-5">
                                                @lang('admin.page_info')
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[title]',__('admin.title'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[title]',$page->translate($locale)->title ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.title')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>
                                            {{--<div class="form-group">
                                                {!! Form::label($locale.'[title_2]',__('admin.title_2'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[title_2]',$page->translate($locale)->title_2 ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.title_2')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>--}}
                                            {{--<div class="form-group">
                                                <label class="form-label" for="description">@lang('admin.description')</label>
                                                <textarea class="form-control" id="description-{{$locale}}"
                                                          name="{{$locale}}[description]'">
                                                {!! $page->translate($locale)->description ?? '' !!}
                                            </textarea>
                                                @error($locale.'.description')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>--}}
                                            {{--<div class="form-group">
                                                <label class="form-label" for="description_2">@lang('admin.description_2')</label>
                                                <textarea class="form-control" id="description_2-{{$locale}}"
                                                          name="{{$locale}}[description_2]'">
                                                {!! $page->translate($locale)->description_2 ?? '' !!}
                                            </textarea>
                                                @error($locale.'.description_2')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>--}}

                                            @if($page->key == 'farm' || $page->key == 'enterprise' || $page->key == 'shop')

                                                <div class="form-group">
                                                    <label class="form-label" for="text_top">@lang('admin.text_top')</label>
                                                    <textarea class="form-control" id="text_top-{{$locale}}"
                                                              name="{{$locale}}[text_top]'">{!! $page->translate($locale)->text_top ?? '' !!}</textarea>
                                                    @error($locale.'.text_top')
                                                    <small class="text-danger">
                                                        <div class="error">
                                                            {{$message}}
                                                        </div>
                                                    </small>
                                                    @enderror
                                                </div>

                                                <div class="form-group">
                                                    <label class="form-label" for="text_medium">@lang('admin.text_medium')</label>
                                                    <textarea class="form-control" id="text_top-{{$locale}}"
                                                              name="{{$locale}}[text_medium]'">{!! $page->translate($locale)->text_medium ?? '' !!}</textarea>
                                                    @error($locale.'.text_medium')
                                                    <small class="text-danger">
                                                        <div class="error">
                                                            {{$message}}
                                                        </div>
                                                    </small>
                                                    @enderror
                                                </div>

                                                <div class="form-group">
                                                    <label class="form-label" for="text_bottom">@lang('admin.text_bottom')</label>
                                                    <textarea class="form-control" id="text_bottom-{{$locale}}"
                                                              name="{{$locale}}[text_bottom]'">{!! $page->translate($locale)->text_bottom ?? '' !!}</textarea>
                                                    @error($locale.'.text_top')
                                                    <small class="text-danger">
                                                        <div class="error">
                                                            {{$message}}
                                                        </div>
                                                    </small>
                                                    @enderror
                                                </div>

                                            @endif

                                            <div class="main-content-label mg-b-5 text-danger">
                                                @lang('admin.page_seo')
                                            </div>

                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_title]',__('admin.meta_title'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_title]',$page->translate($locale)->meta_title ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_title')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_description]',__('admin.meta_description'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_description]',$page->translate($locale)->meta_description ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_description')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_keyword]',__('admin.meta_keyword'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_keyword]',$page->translate($locale)->meta_keyword ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_keyword')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_og_title]',__('admin.meta_og_title'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_og_title]',$page->translate($locale)->meta_og_title ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_og_title')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_og_description]',__('admin.meta_og_description'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_og_description]',$page->translate($locale)->meta_og_description ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_og_description')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>

                                        </div>

                                    @endforeach

                                </div>
                            </div>
                        </div>

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

    <!-- /row -->
    <!-- row -->
    <?php
    $sections = [
        'home' => [
            trans('admin.section2_title'),
            trans('admin.form_header'),
        ],
        'farm' => [
            trans('admin.cover_image'),
            trans('admin.middle'),
            trans('admin.link_image'),
            trans('admin.bottom_image'),
        ],
        'shop' => [
            trans('admin.cover'),
            trans('admin.middle'),
            trans('admin.link_image'),
            trans('admin.bottom_image'),
        ],
        'enterprise' => [
            trans('admin.cover'),
            trans('admin.middle'),
            trans('admin.link_image'),
            trans('admin.bottom_image'),
        ],
        'contact' => [
            trans('admin.cover_image'),
            trans('admin.middle'),
            trans('admin.link_image'),
            trans('admin.bottom_image'),
        ],
        'products' => [
            trans('admin.product_section_title'),
            trans('admin.middle'),
            trans('admin.link_image'),
            trans('admin.bottom_image'),
        ]

    ]
    ?>



    @foreach($page->sections as $key => $item)
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h6 class="card-title mb-1">@lang('admin.section_image') -> {{$sections[$page->key][$key]}}</h6>
                    </div>

                        <div class="form-group">

                            <input type="file" class="dropify" name="image[{{$item->id}}]" data-default-file="{{($item->file) ? asset($item->file->getFileUrlAttribute()) : ''}}" data-height="200"  />

                        </div>

                </div>
            </div>
        </div>
    </div>
    @endforeach

    @if($page->key == 'home')

        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <h6 class="card-title mb-1">Gallery</h6>
                        </div>
                        <div class="form-group">
                            <label class="ckbox">
                                <input type="checkbox" name="images"
                                       value="true" {{$page->images ? 'checked' : ''}}>
                                <span>{{__('admin.status')}}</span>
                            </label>
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


        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <h6 class="card-title mb-1">card slider</h6>
                        </div>
                        <div class="form-group">
                            <table id="options">
                                <tr>
                                    @foreach(config('translatable.locales') as $locale)


                                        <th>
                                            @lang('admin.text') - {{$locale}}
                                        </th>
                                    @endforeach
                                        <th>@lang('admin.icon')</th>
                                    <th>@lang('admin.color')</th>
                                </tr>

                                <?php
                                $i = 1;
                                $options = ['cow','goat','buffalo']
                                ?>
                                @foreach($cards as $item)
                                    <tr>
                                        <input type="hidden" name="options[{{$item->id}}][isNew]" value="false">
                                        <input type="hidden" name="options[{{$item->id}}][isDelete]" value="false">
                                        @foreach(config('translatable.locales') as $locale)


                                            <td>
                                                <textarea class="form-control" type="text" name="options[{{$item->id}}][{{$locale}}][text]">{{$item->translate($locale)->text}}</textarea>
                                            </td>

                                        @endforeach
                                        <td>
                                            <select class="form-control" name="options[{{$item->id}}][icon]">
                                                @foreach($options as $_item)
                                                <option value="{{$_item}}" {{$_item == $item->icon ? 'selected' : ''}}>{{$_item}}</option>

                                                @endforeach
                                            </select>
                                        </td>
                                        <td>
                                            <input class="form-control" name="options[{{$item->id}}][color]" value="{{$item->color}}" data-jscolor="{}">
                                        </td>

                                        <td>
                                            <a href="javascript:void(0);" class="del-option"><i class="fa fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                @endforeach


                            </table>


                        </div>
                        <button type="button" id="add_option_btn">add card</button>
                    </div>
                </div>
            </div>
        </div>

    @endif



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
        CKEDITOR.replace('description-{{$locale}}', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });
        @endforeach
    </script>
    <script>
        let locales = @json(config('translatable.locales'));

        let options = @json(isset($options) ? $options : []);

        let ind = 1;

        $('#add_option_btn').click(function (){
            let tr = $('<tr></tr>');
            tr.append('<input type="hidden" name="options[option_'+ ind +'][isNew]" value="true">');
            tr.append('<input type="hidden" name="options[option_'+ ind +'][isDelete]" value="false">');
            Object.keys(locales).map((name, index) => {



                tr.append('<td> <textarea class="form-control" type="text" name="options[option_'+ ind +']['+ locales[name] +'][text]" value=""></textarea></td>');

            })
            let select = $('<select class="form-control" name="options[option_'+ ind +'][icon]"></select>');

            options.forEach(function (el){
                select.append('<option value="'+ el +'">'+ el +'</option>');
            });
            let td = $('<td></td>');
            td.append(select);
            tr.append(td);

            tr.append('<td><input class="form-control" name="options[option_'+ ind +'][color]" value="#3399FF80" data-jscolor="{}"></td>')

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
